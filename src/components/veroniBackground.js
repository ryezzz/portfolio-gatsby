import React from "react";
import backgroundVeroni from "../components/background_veroni.png";
import { useEffect, useRef } from "react";
import { Delaunay } from "d3-delaunay";



let width = typeof window != "undefined"? window.innerWidth : 1000;
let height = 1500;
let n = 40;
let particles = Array.from({ length: n }, () => [
  Math.random() * width,
  Math.random()  * height,
]);


const Circle = (props) => {
  console.log(props)


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
          context.lineWidth = 5

      context.stroke();

      context.lineWidth = .5
      context.lineCap = "round"

      context.beginPath();
      voronoi.render(context);
      voronoi.renderBounds(context);
      context.strokeStyle = "#00000";


      context.stroke();

      context.beginPath();

      delaunay.renderPoints(context);
      context.fill();
    }

    context.canvas.ontouchmove = context.canvas.onmousemove = (event) => {
      event.preventDefault();
      particles[0] = [event.layerX, event.layerY];
      context.lineWidth = 5;
      update();
    };
    update();


    // return context.canvas;
    // context.beginPath();
    // context.arc(50, 50, 50, 0, 2 * Math.PI);
    // context.fill();
    // return context.canvas;

  });

  return <canvas ref={ref} width={width} height={height}/>;
};

const VeroniBackground = (props) => (
  <div>
     { console.log(props.rgba)}

    <Circle rgba={props.rgba}></Circle>

    {/* <iframe
      rel="preload"
      width="100%"
      height="3000px"
      scrolling="no"
      frameborder="0px"
      src="https://observablehq.com/embed/@ryezzz/hover-voronoi?cells=canvas"
    ></iframe> */}
    {/* <img className = {"veroni-background"} src={backgroundVeroni} alt="Logo" />; */}
  </div>
);

export default VeroniBackground;

// import React from "react"
// import { useEffect, useRef} from "react"
// // import backgroundVeroni from "../components/background_veroni.png"

// // const Circle = () => {
// //   let ref = useRef();

// //     useEffect(() => {
// //        let canvas = ref.current;
// //        let context = canvas.getContext('2d');
// //        context.beginPath();        context.arc(50, 50, 50, 0, 2 * Math.PI);
// //        context.fill();
// //     });

// //   return (
// //       <canvas
// //           ref={ref}
// //           style={{ width: '100px', height: '100px' }}
// //       />
// //   );
// // };

// // function Canvas() {
// //   const ref = React.useRef()

// //   React.useEffect(() => {
// //     const Context = ref.current.getContext('2d')
// //     Context.stroke();

// //   }, [])

// //   return <canvas ref={ref} />
// // }

// const VeroniBackground = () => (
//   <iframe rel="preload"  width="100%" height="3000px" scrolling="no" frameborder="0px"
//   src="https://observablehq.com/embed/@ryezzz/hover-voronoi?cells=canvas"></iframe>
// )

// export default VeroniBackground
