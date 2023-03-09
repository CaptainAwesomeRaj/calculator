// handles the expression when decimal is entered
export default function decimal(expression,prevresult) {
  for(let i = expression.length - 1; i > -1; --i){
    if("0" <= expression[i] && expression[i] <= "9"){
      continue;
    }
    if(expression[i] === "."){
      return{
        expression:expression,
        result:prevresult
      };
    }
    return{
      expression:expression + ".",
      result:prevresult
    };
  }
  return{
    expression:expression + ".",
    result:prevresult
  };
}