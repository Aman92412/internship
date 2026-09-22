const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operation");
const displayInput = document.querySelector(".display");
const inputData = document.querySelector(".input");

let string = "";

Array.from(buttons).forEach((value) => {
    value.addEventListener('click', (e) => {    
        if(e.match( / ^\d+$/) !== null)
        {
        if (e.target.innerHTML == 'Enter' || e.target.innerHTML == 'ans') {
            string = eval(string);
            inputData.value = string;
        }
        else if (e.target.innerHTML == 'clear') {
            string = "";
            inputData.value = string;
            displayInput.value = string
        }
        else if (e.target.innerHTML == 'del'){
            inputData.value =inputData.value.slice( 0 ,-1);
            string = inputData.value;
            displayInput.value = string;
            string = displayInput.value;
        }
        else if (e.target.innerHTML == '%'){       
            string = string + e.target.innerHTML;
            string =string.slice( 0 , -1);
            string  = Math.abs((string/100))  
            inputData.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            displayInput.value = string
            inputData.value = string;
        }
        }
    })
})