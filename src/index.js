import React,{useReducer} from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
function evaluate (exp){
  let ex = exp.replaceAll("×","*");
  ex = ex.replaceAll("−","-");
  ex = ex.replaceAll("÷","/");
  ex = eval(ex);
  return ex.toString();
}
function render({expression,result},{todo}){
  if(todo === "AC"){
    return{
      expression:"0",
      result:"0"
    };
  }
  if(todo === "="){
    return{
      expression:result,
      result:result
    }
  }
  if(expression == "NaN" || expression == "infinity" ){
    alert("Click on AC to continue");
    return{
      expression:expression,
      result:result    
    }
  }
  if(todo === "DEL"){
    if(expression.length > 1){
      let temp = 0;
      if( ("0" <= expression[expression.length - 2] && expression[expression.length - 2] <="9") || expression[expression.length - 2] === "."){
        temp = evaluate(expression.substr(0,expression.length - 1));
      }
      else{
        temp = evaluate(expression.substr(0,expression.length - 2));
      }
      return{
        expression : expression.substr(0,expression.length - 1),
        result : temp
      };
    }
    else{
      return{
        expression:"0",
        result:"0"
      };
    }
  }
  if(todo === "÷"){
    if(("0" <= expression[expression.length - 1] && expression[expression.length - 1] <= "9") || expression[expression.length - 1] === "."){
      return{
        expression:expression + "÷",
        result:result
      }
    }
    else{
      return{
        expression:expression,
        result:result
      };
    }
  }

  if(todo === "×"){
    if(("0" <= expression[expression.length - 1] && expression[expression.length - 1] <= "9") || expression[expression.length - 1] === "."){
      return{
        expression:expression + "×",
        result:result
      }
    }
    else{
      return{
        expression:expression,
        result:result
      };
    }
  }

  if(todo === "−"){
    if(("0" <= expression[expression.length - 1] && expression[expression.length - 1] <= "9") || expression[expression.length - 1] === "." || ("0" <= expression[expression.length - 2] && expression[expression.length - 2] <= "9")){
      return{
        expression:expression + "−",
        result:result
      }
    }
    else{
      return{
        expression:expression,
        result:result
      };
    }
  }

  if(todo === "+"){
    if(("0" <= expression[expression.length - 1] && expression[expression.length - 1] <= "9") || expression[expression.length - 1] === "."){
      return{
        expression:expression + "+",
        result:result
      }
    }
    else{
      return{
        expression:expression,
        result:result
      };
    }
  }

  if(todo === "%"){
    if(("0" <= expression[expression.length - 1] && expression[expression.length - 1] <= "9") || expression[expression.length - 1] === "."){
      return{
        expression:expression + "%",
        result:result
      }
    }
    else{
      return{
        expression:expression,
        result:result
      };
    }
  }

  if(todo === "."){
    for(let i = expression.length - 1; i > -1; --i){
      if("0" <= expression[i] && expression[i] <= "9"){
        continue;
      }
      if(expression[i] === "."){
        return{
          expression:expression,
          result:result
        }
      }
      return{
        expression:expression + ".",
        result:result
      }
    }
    return{
      expression:expression + ".",
      result:result
    }
  }
  

  if("0" <= todo && todo <= "9"){
    if(expression.length === 1 && expression[0] === "0"){
      return{
        expression:todo,
        result:todo
      }
    }
    else{
      return{
        expression:expression + todo,
        result:evaluate(expression + todo)
      };
    }
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