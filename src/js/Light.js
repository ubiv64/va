import React from 'react'

import { 
	Engine, 
	World, 
	Bodies, 
	Render, 
	Constraint, 
	MouseConstraint, 
	Mouse, 
	Runner, 
	Events } from 'matter-js'

function Light(props) {

  var engine = Engine.create(),
      world = engine.world;

  var render = Render.create({
  		id: "bulb",
      element: document.body,
      engine: engine,
      options: {
          width: props.object.canvasSize,
          height: props.object.canvasSize,
          background: "transparent",
          wireframes: false,
          pixelRatio: window.devicePixelRatio
      }
  });

  var runner = Runner.create();
  Runner.run(runner, engine);

  var light = Bodies.rectangle(600, 100, 20, 40, 
  	{ density: 0.05, 
  		frictionAir: 0.005,
  		render: {
  			sprite: {
  				texture: require(`../assets/${"bulb".concat(props.object.link)}.svg`)
  			}
  		}
  	});

  World.add(world, light)
  World.add(world, Constraint.create({
    pointA: { x: 615, y: -10 },
    bodyB: light,
    pointB: { x: 0, y: -32 },
    stiffness: 0.6,
    damping: 0.05,
    render : {
    	strokeStyle: props.object.stroke,
    	type: "line",
    	anchors: false,
    	lineWidth: 4,
    	zIndex: 3
    },
    type: "line"
  }));

  var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
              stiffness: 0.2,
              render: {
                  visible: false
              }
          }
      });

  mouse.pixelRatio = 1

  World.add(world, mouseConstraint);

  render.mouse = mouse;

  Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 800 }
  });

  Events.on(mouseConstraint, 'mousedown', (e) => {
  	if (e.source.body) {
  		props.object.lightSwitch()
  	}
  })
    
	return(
		<div>
			{Render.run(render)}
		</div>
	)
}

export default Light