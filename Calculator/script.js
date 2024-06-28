let oneBtnEl=document.getElementById("1Btn")
let twoBtnEl=document.getElementById("2Btn")
let threeBtnEl=document.getElementById("3Btn")
let fourBtnEl=document.getElementById("4Btn")
let fiveBtnEl=document.getElementById("5Btn")
let sixBtnEl=document.getElementById("6Btn")
let sevenBtnEl=document.getElementById("7Btn")
let eightBtnEl=document.getElementById("8Btn")
let nineBtnEl=document.getElementById("9Btn")
let zeroBtnEl=document.getElementById("0Btn")

let plusBtnEl=document.getElementById("plusBtn")
let minusBtnEl=document.getElementById("minusBtn")
let intosBtnEl=document.getElementById("intosBtn")
let divideBtnEl=document.getElementById("divideBtn")
let equalBtnEl=document.getElementById("=Btn")
let dotEl=document.getElementById(".Btn")
let clearBtnEl=document.getElementById("clearBtn")
let inputEleEl=document.getElementById("inputEle")

oneBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"1"
})

twoBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"2"
})

threeBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"3"
})

fourBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"4"
})

fiveBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"5"
})

sixBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"6"
})

sevenBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"7"
})

eightBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"8"
})

nineBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"9"
})

zeroBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"0"
})

plusBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"+"
})

minusBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"-"
})

intosBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"*"
})

divideBtnEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"/"
})

dotEl.addEventListener("click",function(){
    inputEleEl.value=inputEleEl.value+"."
})

clearBtnEl.addEventListener("click",function(){
    inputEleEl.value=""
})

function evaluation(){

}

inputEleEl.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        evaluation()
    }
})




function evaluation(){
    inputEleEl.value=eval(inputEleEl.value)
}