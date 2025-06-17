
/*
const display = document.getElementById("display");

function appendToDisplay(input){
    
    display.value += input;

}

function calculate(){

    try{
        display.value = eval(display.value);
    }

    catch(errror){
        display.value = "Error";
    }
    
}

function clearAll(){

    display.value= "";
    
}
*/




const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input;

}

function calculate(){

    const input = display.value;
    
    let operator;
    let index;
    

    if (input.includes('+')){
    
        operator = '+';
        index = input.indexOf('+');
    
    } else if(input.includes('-')){
        
        operator = '-';
        index = input.indexOf('-');
    
    } else if(input.includes('*')){
        
        operator = '*';
        index = input.indexOf('*');

    } else if (input.includes('/')){
        
        operator = '/';
        index = input.indexOf('/');
    
    } else{
        
        display.value = "Error";
        return;
    
    }

    
    const left = input.substring(0, index);
    const right = input.substring(index + 1);

    const num1 = Number(left);
    const num2 = Number(right);

    if (isNaN(num1) || isNaN(num2)){

        display.value = "Error";
        return;

    }


    if (operator === '+'){
        
        result = num1 + num2;

    } else if(operator === '-'){
        
        result = num1 - num2;

    } else if(operator === '*'){

        result = num1 * num2;

    }else if (operator === '/'){
        
        if (num2 === 0){
            
            display.value = "Error";
            return;

        }
        
        result = num1 / num2;
    }

    display.value = result;

}

function clearAll(){

    display.value = "";

}




