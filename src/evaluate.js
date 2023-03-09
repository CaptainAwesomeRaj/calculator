// takes a valid javascript expression as input and returns result as String
export default function evaluate (exp){
    let ex = exp.replaceAll("×","*").replaceAll("−","-").replaceAll("÷","/");
    return eval(ex).toString();
}