let inputVal = document.getElementById("input-value");
let firstnum=""
let secondnum=""
let clear=""
let operate=""
let flag =false


function abc(e){
    if(flag){
        inputVal.value = ""
        flag = false
    }
    inputVal.value += (e.innerHTML);

}
function operators(e){
    firstnum = inputVal.value
    operate = e.innerHTML;
    flag = true

}
function calculate(){
    secondnum = inputVal.value
    let num1 = Number(firstnum)
    let num2 = Number(secondnum)
    var  result = 0
    if(operate ==="*")
{
    result =num1*num2;
}
else if(operate ==="/")
{
    result =num1/num2;
}
else if(operate ==="+")
{
    result =num1+num2;
}
else if(operate ==="-")
{
    result =num1-num2;
}
inputVal.value = result;

flag = true

}


function clearvalue(){
  inputVal.value = ""
  firstnum = ""
  secondnum = ""
  operate = ""
}