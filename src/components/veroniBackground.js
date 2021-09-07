import React from "react";
import { useEffect, useState, useRef } from "react";
import { Delaunay } from "d3-delaunay";


const Veroni = (props) => {

  let height = props.height
  let width = props.width
  let stroke = props.stroke
  let n=props.n
  let rgba= props.rgba
  let particles = props.particles



  let ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    function update() {
      const delaunay = Delaunay.from(particles);
      const voronoi = delaunay.voronoi([0, 0, width - 0, height - 0]);
      context.clearRect(0, 0, width, height);
      context.beginPath();
      delaunay.render(context);
      context.strokeStyle = rgba;
      context.lineWidth = stroke;
      context.stroke();
      context.lineWidth = .5;
      context.lineCap = "round";
      context.beginPath();
      voronoi.render(context);
      voronoi.renderBounds(context);
      context.strokeStyle = "#00000";
      context.stroke();
      context.beginPath();
      delaunay.renderPoints(context);
      context.fill();
    }

      update();

  });

  return <canvas ref={ref} particles={props.particles} stroke={props.stroke} n={props.n} width={props.width} height={props.height} />;
};




const VeroniBackground = (props) => {
  return (<div>
    <Veroni particles={props.particles} stroke={props.stroke} n={props.n} rgba={props.rgba} width={props.width} height={props.height}/>
  </div>)
};

export default VeroniBackground;
