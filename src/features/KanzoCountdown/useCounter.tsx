'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type CountDownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expiredTime: number;
  dangerLevel: number;
};

const InitialState: CountDownTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expiredTime: 0,
  dangerLevel: 0,
};

export const useCounter = (expiredTime?: number) => {
  const [counter, setCounter] = useState<CountDownTime>({ ...InitialState });
  const reqIDRef = useRef<number>(0);

  const reset = useCallback(() => {
    window.cancelAnimationFrame(reqIDRef.current);
  }, []);

  const countdown = useCallback(
    (target: number) => {
      const countdownLoop = () => {
        const now = Date.now();
        const distance = target - now;

        if (distance < 0) {
          reset();
          setCounter({ ...InitialState });
        }
        setCounter({ ...getTimerCount(distance) });
        // update request ID
        reqIDRef.current = window.requestAnimationFrame(countdownLoop);
      };

      return countdownLoop;
    },
    [reset],
  );

  useEffect(() => {
    if (!expiredTime) {
      return;
    }

    const expiredDate = new Date(expiredTime);
    console.log({ expiredDate });
    if (isNaN(expiredDate.getTime())) {
      return;
    }

    countdown(expiredTime)();

    return () => reset();
  }, [expiredTime, countdown, reset]);

  return { ...counter };
};

const getTimerCount = (distance: number): CountDownTime => {
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / 1000 / 60) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    expiredTime: distance,
    dangerLevel: getDangerLevel(distance),
  };
};

export type DangerLevelType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const getDangerLevelByExpiredAt = (
  expiredAt: number,
): DangerLevelType => {
  const now = Date.now();
  const distance = expiredAt - now;

  return getDangerLevel(distance);
};

const getDangerLevel = (expiredTime: number): DangerLevelType => {
  const exHour = expiredTime / (60 * 60 * 1000);

  if (expiredTime <= 0) {
    return 0;
  }

  if (exHour < 3) {
    return 1;
  }

  if (exHour < 5) {
    return 2;
  }

  if (exHour < 8) {
    return 3;
  }

  if (exHour < 12) {
    return 4;
  }

  if (exHour < 24) {
    return 5;
  }

  return 6;
};
