'use client';
import { FC, useEffect, useRef } from 'react';

import { Bodies, Engine, Render, Runner, World } from 'matter-js';

import { scene } from './drunkMeter.css';

export const DrunkerMeter: FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        background: 'rgb(251, 203, 98, 0.5)',
        wireframes: false,
      },
    });

    const borderWidth = 8;
    // Matter.Bodies.rectangle(x, y, width, height, [options])
    const ground = Bodies.rectangle(width / 2, height, width, borderWidth, {
      isStatic: true,
      render: {
        fillStyle: 'rgb(245, 125, 41)',
      },
    });
    const leftWall = Bodies.rectangle(0, height / 2, borderWidth, height, {
      isStatic: true,
      render: {
        fillStyle: 'rgb(245, 125, 41)',
      },
    });
    const rightWall = Bodies.rectangle(width, height / 2, borderWidth, height, {
      isStatic: true,
      render: {
        fillStyle: 'rgb(245, 125, 41)',
      },
    });

    const ball = Bodies.circle(150, 0, 10, {
      restitution: 0.9,
      render: {
        fillStyle: 'yellow',
      },
    });

    World.add(engine.world, [ground, leftWall, rightWall, ball]);

    Render.run(render);

    const runner = Runner.create();
    // deprecated
    // Engine.run(engine)
    Runner.run(runner, engine);
  }, []);

  return (
    <div ref={boxRef} className={scene}>
      <canvas ref={canvasRef} />
    </div>
  );
};
