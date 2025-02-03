let paraelement=document.getElementById("paratab");
let header=document.getElementById("tophead");
let b1=document.getElementById("homebtn");
let b2=document.getElementById("aboutbtn");
let b3=document.getElementById("servicesbtn");
let b4=document.getElementById("contactbtn");
function fun1(){
    paraelement.textContent="Welcome to the home page";
    header.style.backgroundColor="blue";
    b1.style.backgroundColor="blue";
};
function fun2(){
    paraelement.textContent="Welcome to the about page";
    header.style.backgroundColor="green";
    b2.style.backgroundColor="green";
};
function fun3(){
    paraelement.textContent="Welcome to the service page";
    header.style.backgroundColor="orange";
    b3.style.backgroundColor="orange";
};
function fun4(){
    paraelement.textContent="Welcome to the contact page";
    header.style.backgroundColor="yellowgreen";
    b4.style.backgroundColor="yellowgreen";
};
