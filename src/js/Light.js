import React from 'react'

import { 
	Engine, 
	World,
  Body, 
	Bodies, 
	Render, 
	Constraint, 
	MouseConstraint, 
	Mouse, 
	Runner, 
	Events 
} from 'matter-js'

function Light(props) {

  var engine = 
    Engine.create(), 
    world = engine.world

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
  })

  var runner = Runner.create()
  Runner.run(runner, engine)

  var light = Bodies.rectangle(props.object.rectangle.x, props.object.rectangle.y, 20, 40, 
  	{ density: 0.1, 
  		frictionAir: 0.005,
  		render: {
  			sprite: {
  				texture: require(`../assets/${"bulb".concat(props.object.link)}.svg`)
  			}
  		}
  	})

  World.add(world, light)
  World.add(world, Constraint.create({
    pointA: { x: props.object.rectangle.pointAX, y: (window.innerWidth < 950) ? 0 : 100},
    bodyB: light,
    pointB: { x: 0, y: props.object.rectangle.pointBY },
    stiffness: 1,
    damping: 0.05,
    render : {
    	strokeStyle: props.object.stroke,
    	type: "line",
    	anchors: false,
    	lineWidth: props.object.lineWidth
    },
    type: "line"
  }))

  var mouse = 
    Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.05,
            render: {
                visible: false
            }
        }
    })

  mouse.pixelRatio = 1

  World.add(world, mouseConstraint)

  render.mouse = mouse

  Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 800 }
  })
  
  //scaling objects for 500/500 canvas
  light.render.sprite.xScale = light.render.sprite.xScale * 1.5;
  light.render.sprite.yScale = light.render.sprite.yScale * 1.5;
  Body.scale(light, 1.5, 1.5)

  Events.on(mouseConstraint, 'mousedown', (e) => {
  	if (e.source.body) {
  		props.object.lightSwitch()
  	}
  })

  if (props.object.mobile) {
    light.render.sprite.xScale = light.render.sprite.xScale * 1.85;
    light.render.sprite.yScale = light.render.sprite.yScale * 1.85;
    Body.scale(light, 1.85, 1.85)
  }
    
	return(
		<div>
			{Render.run(render)}
		</div>
	)
}

export default Light