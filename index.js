//console.log("Salaaaam");
//console.log("Necesiz?");

//window.alert("Yemek yemisen?");
//window.alert("100% ???");

//let age = 19;
//let price = 10.99;
//let gpa = 4.5;

//let MatorVeli = "Isgender" ;
//let yimak = "Ash" ;

//console.log(` ${age} yasim var `);
//console.log(` $${price} qiymeti var `);
//console.log(` Uni qiyamtlarim ${gpa} dir`);

//console.log(` ${MatorVeli} buyuk ama yorgun`);
//console.log(` ${yimak} olsa ne gederdii ` );

//let Soyad = "Rustamov";
//let Yash = 19;
//let internship = true;

//document.getElementById("p1").textContent = ` Bratin adi ${Soyad}`;
//document.getElementById("p2").textContent = ` ${Yash} yashli Cavan beyniqan kelee`;
//document.getElementById("p3").textContent = ` intern ? : ${internship}  - Bagirtdi :D `;


//let username;
//username = window.prompt("Nickin necedir?");
//console.log(username);

//let username;

/* document.getElementById("Heleki bilmirem").onclick = function(){
    username = document.getElementById("Nese birshey").value;
    document.getElementById("basliq").textContent = ` ${username}? bele ad olare ` ;
} */

/* let age = window.prompt("How old are you?");
age = Number(age);
age += 1
console.log(age , typeof age); */

/* let radius;
const PI = 3.14 ;
let circumference;

document.getElementById("MySubmit").onclick = function(){
    radius = document.getElementById("MyText").value;
    circumference = 2 * PI * radius;
    document.getElementById("MyH3").textContent = circumference + "cm";
}

*/

/*
const BtnIncrease = document.getElementById("BtnIncrease");
const BtnDecrease = document.getElementById("BtnDecrease");
const BtnReset = document.getElementById("BtnReset");
const CountLabel = document.getElementById("CountLabel");
let count = 0;

BtnIncrease.onclick = function(){
    count++
    CountLabel.textContent = count;
}

BtnDecrease.onclick = function(){
    count--
    CountLabel.textContent = count;
}

BtnReset.onclick = function(){
    count = 0
    CountLabel.textContent = count;
}
*/

/*

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
    
}

*/

/*

const myText = document.getElementById("myInput");
const mySubmit = document.getElementById("myEnter");
const resultElement = document.getElementById("resultElement");
let age;


mySubmit.onclick = function(){


    age = myText.value
    age = Number(age);


    if(age >= 100){
        resultElement.textContent = `You are TOO old to enter this site`;
    }
    else if(age < 0 ){ 
        resultElement.textContent = `You are NOT born yet`;
    }
    else if(age == 0){
        resultElement.textContent = `You are just burn ytm`;
    }
    else if(age >= 18){
        resultElement.textContent = `Welcome qaaadan alim`;
    }
    else{
        resultElement.textContent = `Boyu gelersen`;
    }



}

*/

/*

const myCheckBox = document.getElementById("myCheckBox");
const myVisa = document.getElementById("myVisa");
const myMaster = document.getElementById("myMaster");
const myPaypal = document.getElementById("myPaypal");
const myEnter = document.getElementById("myEnter");
const aboneResult = document.getElementById("aboneResult");
const paymentResult = document.getElementById("paymentResult");

myEnter.onclick = function(){

    if(myCheckBox.checked){
        aboneResult.textContent = `Ne gozel ne gozel`
    }
    else{
        aboneResult.textContent = `O pamduru ezme dana`
    }


    if(myVisa.checked){
        paymentResult.textContent = `Ey cenab siz Visa cartindan istifade edirsiz`
    }
    else if(myMaster.checked){
        paymentResult.textContent =`Ey cenab siz clin sponsoru Master cartdan istifade ed`
    }
    else if(myPaypal.checked){
        paymentResult.textContent = `Bu ne kartdi eeee`
    }
    else{
        paymentResult.textContent = `Paypaldan yaxshidi`
    }


}

*/


/*

let grade = babnik;
let gradeLetter;

switch(true){
    case grade >= 90:
        gradeLetter = "A";
        break;

    case grade >= 80:
        gradeLetter = "B";
        break;

    case grade >= 70:
        gradeLetter = "C";
        break;
    
    case grade >= 60:
        gradeLetter = "D";
        break;
    
    case grade >= 45:
        gradeLetter = "F";    
        break;

    case grade >= 0:
        gradeLetter = "You failed";
        break;
    
    default:
        "This is not an valid score"
}


console.log(gradeLetter);

*/

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




