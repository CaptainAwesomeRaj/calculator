// performs delete operation on expression and returns the resultant state object
import evaluate from "./evaluate.js";
export default function del(expression) {
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