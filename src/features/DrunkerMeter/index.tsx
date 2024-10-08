'use client';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Bodies, Body, Engine, Render, Runner, World } from 'matter-js';

import { DrinkData } from '@/atoms/drank.atom';
import { DRINK_KEYS } from '@/config';
import { useAddDrink, useAddDrinkMutators } from '@/hooks/useAddDrink';
import { useDrank } from '@/hooks/useDrank';
import { getDrinkImage } from '@/utilities/getDrinkImage';

import { scene as sceneStyle } from './drunkMeter.css';

// TODO: 円形の画像を作成する
const DRINK_IMAGES = Object.fromEntries(
  DRINK_KEYS.map<[(typeof DRINK_KEYS)[number], string]>((key) => [
    key,
    getDrinkImage(key),
  ]),
) as Record<(typeof DRINK_KEYS)[number], string>;

const BORDER_WIDTH = 10 as const;

const createDropDrink = (item: DrinkData, width: number, posY: number = 0) => {
  const { alcohol, amount } = item;
  const randomX = Math.floor(Math.random() * -width) + width;
  const radius =
    alcohol < 10
      ? alcohol * 5
      : alcohol < 15
        ? alcohol * 3.25
        : alcohol > 30
          ? alcohol
          : alcohol * 2.5;
  // const radius = amount / 20;
  const scale = (radius * 2) / 100;

  return Bodies.circle(randomX, posY, radius, {
    restitution: (amount - alcohol) / 500,
    render: {
      fillStyle: 'rgb(245, 125, 41)',
      sprite: {
        texture: DRINK_IMAGES[item.id],
        xScale: scale,
        yScale: scale,
      },
    },
  });
};

type DrunkerMeterProps = {
  initialData: DrinkData[];
};

const DrunkerMeter: FC<DrunkerMeterProps> = ({ initialData }) => {
  const [initialDrinks] = useState([...initialData]);
  const addDrink = useAddDrink();

  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [worldSize, setWorldSize] = useState<DOMRect>();
  const [scene, setScene] = useState<Render>();

  const handleResize = useCallback(() => {
    setWorldSize(boxRef.current?.getBoundingClientRect());
  }, []);

  useEffect(() => {
    if (!boxRef.current || !canvasRef.current) {
      return;
    }

    const width = boxRef.current.clientWidth || 320;
    const height = boxRef.current.clientHeight || 400;

    const engine = Engine.create({});
    const render = Render.create({
      element: boxRef.current,
      engine,
      canvas: canvasRef.current,
      options: {
        width: width,
        height: height,
        background: 'rgb(251, 203, 98, 0.25)',
        wireframes: false,
      },
    });

    // Matter.Bodies.rectangle(x, y, width, height, [options])
    const ground = Bodies.rectangle(width / 2, height, width, BORDER_WIDTH, {
      isStatic: true,
      render: {
        fillStyle: 'rgba(245, 125, 41, 0)',
      },
    });
    const leftWall = Bodies.rectangle(0, height / 2, BORDER_WIDTH, height, {
      isStatic: true,
      render: {
        fillStyle: 'rgba(245, 125, 41, 0)',
      },
    });
    const rightWall = Bodies.rectangle(
      width,
      height / 2,
      BORDER_WIDTH,
      height,
      {
        isStatic: true,
        render: {
          fillStyle: 'rgba(245, 125, 41, 0)',
        },
      },
    );

    World.add(engine.world, [ground, leftWall, rightWall]);

    // set initial drinks
    const balls = initialDrinks.map((item) =>
      createDropDrink(item, width, 100),
    );

    World.add(engine.world, [...balls]);

    Render.run(render);

    const runner = Runner.create();
    // deprecated
    // Engine.run(engine)
    Runner.run(runner, engine);

    setWorldSize(boxRef.current.getBoundingClientRect());
    setScene(render);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, initialDrinks]);

  // Add new drink
  useEffect(() => {
    if (!addDrink || !boxRef.current) {
      return;
    }
    // @ts-ignore
    const engine = scene?.engine as Engine;
    if (!engine) {
      return;
    }

    const boxRect = boxRef.current.getBoundingClientRect();
    const addBall = createDropDrink(addDrink, boxRect.width);

    World.add(engine.world, [addBall]);
  }, [addDrink, scene]);

  // Responsive World size
  useEffect(() => {
    if (!worldSize || !scene) {
      return;
    }

    const { width, height } = worldSize;

    // Dynamically update canvas and bounds
    scene.bounds.max.x = width;
    scene.bounds.max.y = height;
    scene.options.width = width;
    scene.options.height = height;
    scene.canvas.width = width;
    scene.canvas.height = height;

    // scene.engine は取得可能だが types でエラーになるので ignore する
    // @ts-ignore
    const ground = scene.engine.world.bodies[0];
    // @ts-ignore
    const leftWall = scene.engine.world.bodies[1];
    // @ts-ignore
    const rightWall = scene.engine.world.bodies[2];

    Body.setPosition(ground, {
      x: width / 2,
      y: height,
    });
    Body.setVertices(ground, [
      { x: 0, y: height },
      { x: width, y: height },
      { x: width, y: height + BORDER_WIDTH },
      { x: 0, y: height + BORDER_WIDTH },
    ]);

    Body.setPosition(leftWall, {
      x: 0,
      y: height / 2,
    });
    Body.setVertices(leftWall, [
      { x: 0, y: 0 },
      { x: BORDER_WIDTH, y: 0 },
      { x: BORDER_WIDTH, y: height },
      { x: 0, y: height },
    ]);

    Body.setPosition(rightWall, {
      x: width,
      y: height / 2,
    });
    Body.setVertices(rightWall, [
      { x: width, y: 0 },
      { x: width + BORDER_WIDTH, y: 0 },
      { x: width + BORDER_WIDTH, y: height },
      { x: width, y: height },
    ]);
  }, [scene, worldSize]);

  return (
    <div ref={boxRef} className={sceneStyle}>
      <canvas ref={canvasRef} />
    </div>
  );
};

const DrunkerMeterContainer: FC = () => {
  const { drinks } = useDrank();
  const { resetAddDrink } = useAddDrinkMutators();

  useEffect(() => {
    resetAddDrink();
  }, []);

  return <DrunkerMeter initialData={drinks} />;
};

export { DrunkerMeterContainer as DrunkerMeter };
