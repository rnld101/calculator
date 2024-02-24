const display = document.getElementById("display");

function appendToDisplay(_input){
    display.value += _input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }    
}