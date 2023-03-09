import evaluate from "./evaluate.js";
export default function number(expression,todo) {
  if(expression.length === 1 && expression[0] === "0"){
    return{
      expression:todo,
      result:todo
    };
  }
  else{
    return{
      expression:expression + todo,
      result:evaluate(expression + todo)
    };
  }    
}