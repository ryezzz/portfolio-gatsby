import React from "react";
import backgroundVeroni from "../components/background_veroni.png";
import { useEffect, useState, useRef } from "react";
import { Delaunay } from "d3-delaunay";
// let width= 100
// let height=100
let width = typeof window != "undefined" ? window.innerWidth : 1000;
let height = typeof window != "undefined" ? window.innerHeight : 2000;
let n = 10;

let particles = Array.from({ length: n }, () => [
  Math.random() * width,
  Math.random() * height,
]);

// useEffect(() => {
//   const interval = setInterval(() => {
//     update();

//   }, 20000);
//   return () => clearInterval(interval);
// }, []);


 const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  let positionX = position.x >= width - 1? width : position.x
  let positionY = position.y>= width - 1 ? width : position.y


  return {x:positionX, y:positionY};
};





const Circle = (props) => {

  // console.log(props.mousePosition)
  const [count, setCount] = useState(0);

  // console.log(props);

  let ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    function update() {
      const delaunay = Delaunay.from(particles);

      // const voronoi = delaunay.voronoi([0, 0, 960, 500]);
      const voronoi = delaunay.voronoi([0, 0, width - 0, height - 0]);
      context.clearRect(0, 0, width, height);




      context.beginPath();
      delaunay.render(context);
      context.strokeStyle = props.rgba;
      context.lineWidth = 5;

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

    // props.mousePosition.x < width && props.mousePosition.y < height && particles.splice(0,1, [props.mousePosition.x, props.mousePosition.y])


    context.canvas.ontouchmove = context.canvas.onmousemove = (event) => {
      // event.preventDefault();
      // particles[0] = [event.layerX, event.layerY];
      // context.lineWidth = 5;
      // update();
    };



    let lastKnownScrollPosition = 0;
    let ticking = false;

    function doSomething(scrollPos) {

      // particles.push([scrollPos, 200])
      console.log(particles)
      // update();
    }
          window.addEventListener('scroll', function(e) {
            lastKnownScrollPosition = window.scrollY;

            if (!ticking) {
              window.requestAnimationFrame(function() {
                doSomething(lastKnownScrollPosition);
                console.log("scrolling")
                ticking = false;
              });

              ticking = true;
            }
          });
      update();


    // const interval = setInterval(() => {
    //   update();
    // }, 10000);

    // return context.canvas;
    // context.beginPath();
    // context.arc(50, 50, 50, 0, 2 * Math.PI);
    // context.fill();
    // return context.canvas;
  });

  return <canvas ref={ref} width={width} height={height} />;
};


const VeroniBackground = (props) => (

  <div>
    {/* {console.log(props.rgba)} */}

    <Circle mousePosition={useMousePosition()} rgba={props.rgba}></Circle>
  </div>
);

export default VeroniBackground;
