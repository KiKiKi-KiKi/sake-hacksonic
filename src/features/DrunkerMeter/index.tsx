'use client';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Bodies, Body, Engine, Render, Runner, World } from 'matter-js';

import { scene as sceneStyle } from './drunkMeter.css';

const BORDER_WIDTH = 20 as const;

export const DrunkerMeter: FC = () => {
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
        background: 'rgb(251, 203, 98, 0.5)',
        wireframes: false,
      },
    });

    // Matter.Bodies.rectangle(x, y, width, height, [options])
    const ground = Bodies.rectangle(width / 2, height, width, BORDER_WIDTH, {
      isStatic: true,
      render: {
        fillStyle: 'rgb(245, 125, 41)',
      },
    });
    const leftWall = Bodies.rectangle(0, height / 2, BORDER_WIDTH, height, {
      isStatic: true,
      render: {
        fillStyle: 'rgb(245, 125, 41)',
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
          fillStyle: 'rgb(245, 125, 41)',
        },
      },
    );

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

    setWorldSize(boxRef.current.getBoundingClientRect());
    setScene(render);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

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

    const ground = scene.engine.world.bodies[0];
    const leftWall = scene.engine.world.bodies[1];
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
