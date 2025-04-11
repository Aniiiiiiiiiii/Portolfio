import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export default function Skill2(){
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const renderRef = useRef(null);

  useEffect(() => {
    const engine = engineRef.current;
    const world = engine.world;

    const width = 800;
    const height = 600;
    const wallThickness = 50;

    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: '#222'
      }
    });

    Matter.Render.run(render);
    renderRef.current = render;

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Create boundaries
    const walls = [
      Matter.Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true }),
      Matter.Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }),
      Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }),
      Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true })
    ];
    Matter.World.add(world, walls);

    // Texts and Circles
    const texts = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    const circles = [];

    for (let i = 0; i < 10; i++) {
      let x = 100 + Math.random() * (width - 200);
      let y = 100 + Math.random() * (height - 200);
      let circle = Matter.Bodies.circle(x, y, 40, {
        restitution: 0.9,
        friction: 0.005,
        render: { fillStyle: '#3498db' }
      });
      circle.customText = texts[i];
      circles.push(circle);
    }

    Matter.World.add(world, circles);

    // Mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Matter.World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Custom rendering: draw text on circles
    Matter.Events.on(render, 'afterRender', () => {
      const context = render.context;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#ffffff';
      context.font = '20px Arial';

      circles.forEach(circle => {
        context.fillText(circle.customText, circle.position.x, circle.position.y);
      });
    });

    // Clean up on unmount
    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div ref={sceneRef} style={{ textAlign: 'center', margin: '0 auto', background: '#f0f0f0', padding: '20px' }} />
  );
};

// export default Skill2;
