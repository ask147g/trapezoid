import {useState, useEffect, useRef} from "react";
import { width, height, textButton} from "./consts/consts";
import * as sizes from "./consts/sizes";
import { CheckResult } from "./consts/check";
import './App.css'

function App() {
  const canvas = useRef();
  let ctx = null; // canvas
  const [check, setCheck] = useState(false); // хук состояния, отвечает за правильность ответа
  const [click, setClick] = useState(false); // отвечает за нажатие кнопки

  // get context of the canvas
  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = width+0.2*width; // размеры canvas
    canvasEle.height = height+0.2*height; // размеры canvas
 
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
    ctx.font = "24px serif"; // размер текста
    let maxValue = sizes.bottomLeftSide+sizes.bottomRightSide;
    // нижняя сторона трапеции
    drawLine({ x: 0, y: height, x1: width, y1: height });
    ctx.fillText(sizes.bottomLeftSide, sizes.bottomLeftSide/maxValue*width/2, height+0.2*height);
    ctx.fillText(sizes.bottomRightSide, sizes.bottomLeftSide/maxValue*width*1.1, height+0.2*height);
    
    // высота трапеции
    drawLine({ x: sizes.bottomLeftSide/maxValue*width, y: height, x1: sizes.bottomLeftSide/maxValue*width, y1: height-sizes.height/maxValue*height });
    ctx.fillText(sizes.height, sizes.bottomLeftSide/maxValue*width*1.1, height-0.5*sizes.height/maxValue*height);
    
    // добавить гипотенузы и верхнюю сторону трапеции
  }, []);

  // функция для рисования линий от точки (x,y) до (x1, y1)
  // вызов = drawLine({x: значение, y: значение, x1: значение, y1: значение})
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
          setClick(true); // изменить переменную click на true (на кнопку нажали)
          // использовать setCheck для проверки введенного пользователем значения на правильное или нет
          // проверка в функции CheckResult();
          }
        }>
          {textButton}
        </button>
        { // если ответ правильный, вывести "Правильно!"
          check && <p>Правильно!</p>
        }
        { // если кнопка нажималась (в переменной click = true) и ответ неверный (check = false),
        // вывести Неправильно!
        // аналогично верхней части кода
          <p></p>
        }
      </div>
    </>
  )
}

export default App
