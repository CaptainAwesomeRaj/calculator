export default function operation(expression,operator,prevresult){
  if(("0" <= expression[expression.length - 1] && expression[expression.length - 1] <= "9") || expression[expression.length - 1] === "."){
    return{
      expression:expression + operator,
      result:prevresult
    }
  }
  else{
    return{
      expression:expression,
      result:prevresult
    };
  }
}