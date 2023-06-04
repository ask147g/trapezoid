import {useState, useEffect, useRef} from "react";
import { width, height, textButton} from "./consts/consts";
import * as sizes from "./consts/sizes";
import { CheckResult } from "./consts/check";
import './App.css'

function App() {
  const canvas = useRef();
  let ctx = null; // canvas
  const [check, setCheck] = useState(false);
  const [click, setClick] = useState(false);

  // get context of the canvas
  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = width+0.2*width;
    canvasEle.height = height+0.2*height;
 
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
    ctx.font = "24px serif";
    let maxValue = sizes.bottomLeftSide+sizes.bottomRightSide;
    // bottom left right
    drawLine({ x: 0, y: height, x1: width, y1: height });
    ctx.fillText(sizes.bottomLeftSide, sizes.bottomLeftSide/maxValue*width/2, height+0.2*height);
    ctx.fillText(sizes.bottomRightSide, sizes.bottomLeftSide/maxValue*width*1.1, height+0.2*height);
    
    // height
    drawLine({ x: sizes.bottomLeftSide/maxValue*width, y: height, x1: sizes.bottomLeftSide/maxValue*width, y1: height-sizes.height/maxValue*height });
    ctx.fillText(sizes.height, sizes.bottomLeftSide/maxValue*width*1.1, height-0.5*sizes.height/maxValue*height);
    
    // left hyp
    drawLine({ x: 0, y: height, x1: sizes.bottomLeftSide/maxValue*width, y1: height-sizes.height/maxValue*height });
    ctx.fillText(sizes.leftHypotenuse, 0, height-0.5*sizes.height/maxValue*height);
    
    // top line
    drawLine({ x: sizes.bottomLeftSide/maxValue*width, y: height-sizes.height/maxValue*height, x1: (sizes.bottomLeftSide+sizes.topSide)/maxValue*width, y1: height-sizes.height/maxValue*height });
    ctx.fillText(sizes.topSide, sizes.bottomLeftSide/maxValue*width*1.1, height-1.1*sizes.height/maxValue*height);
    
    // right hyp
    drawLine({ x: (sizes.bottomLeftSide+sizes.topSide)/maxValue*width, y: height-sizes.height/maxValue*height, x1: width, y1: height });
    ctx.fillText(sizes.rightHypotenuse, 0.9*width, height-0.5*sizes.height/maxValue*height);

  }, []);

  
  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = 'black', width = 2 } = style;
 
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  }

  return (
    <>
      <div>
        <p>
          Найдите площадь трапеции, изображенной на рисунке.
        </p>
        <div>
        <canvas className="trapezoid" ref={canvas}></canvas>
        </div>
        <input name="result"></input>
        <button onClick={() => {
          setClick(true);
          setCheck(CheckResult())}
        }>
          {textButton}
        </button>
        {check && <p>Правильно!</p>}
        {click && !check && <p>Неправильно!</p>}
      </div>
    </>
  )
}

export default App
