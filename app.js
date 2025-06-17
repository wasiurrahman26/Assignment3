let butn=document.getElementById("btn");
let Amount=document.getElementById("amount");
let percentage=document.getElementById("percent");
let h4=document.getElementById("total");

butn.addEventListener("click",function(){

    let A=amount.value;
    let p=percentage.value;
    let count=A*p/100;
   let total=`${count + Number(amount.value)}`;
   
    h4.innerText=`Total : $${total}`
    event.preventDefault();
})