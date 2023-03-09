import React,{useReducer} from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import clear from "./clear.js";
import del from "./delete.js";
import operation from"./operation.js";
import decimal from "./decimal.js";
import equal from "./equal.js";
import number from"./number.js";

function render({expression,result},{todo}){

  if("0" <= todo && todo <= "9"){
    return number(expression,todo);
  }

  switch (todo) {
    case "AC":
      return clear();
  
    case "DEL":
      return del(expression);
    
    case ".":
      return decimal(expression,result);
    
    case "=":
      return equal(expression);

    default:
      return operation(expression,todo,result);

  }
}
function Root(){
  const [{expression,result},dispatch] = useReducer(render,{expression:"0",result:"0"});
  return(
    <div className="calculator">
      <div className="output">
        <div className="expression">
          {expression}
        </div>
        <div className="result"> 
          {result}
        </div>
      </div>
      <button className="span-two" onClick={() => dispatch({todo : "AC"})}>AC</button>
      <button className="operator" onClick={() => dispatch({todo : "DEL"})}>DEL</button>
      <button className="operator" onClick={() => dispatch({todo : "÷"})}>÷</button>
      <button onClick={() => dispatch({todo : "7"})}>7</button>
      <button onClick={() => dispatch({todo : "8"})}>8</button>
      <button onClick={() => dispatch({todo : "9"})}>9</button>
      <button onClick={() => dispatch({todo : "×"})}className="operator">x</button>
      <button onClick={() => dispatch({todo : "4"})}>4</button>
      <button onClick={() => dispatch({todo : "5"})}>5</button>
      <button onClick={() => dispatch({todo : "6"})}>6</button>
      <button onClick={() => dispatch({todo : "−"})}className="operator">−</button>
      <button onClick={() => dispatch({todo : "1"})}>1</button>
      <button onClick={() => dispatch({todo : "2"})}>2</button>
      <button onClick={() => dispatch({todo : "3"})}>3</button>
      <button onClick={() => dispatch({todo : "+"})}className="operator">+</button>
      <button onClick={() => dispatch({todo : "."})}>.</button>
      <button onClick={() => dispatch({todo : "0"})}>0</button>
      <button onClick={() => dispatch({todo : "%"})}className="operator">%</button>
      <button onClick={() => dispatch({todo : "="})}className="equal">=</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);