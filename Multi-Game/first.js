const qusEl = document.getElementById("qus");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
console.log(qusEl);



let score = JSON.parse(localStorage.getItem("score"));
scoreEl.innerText = `Score : ${score}`;
const num1 = Math.floor(Math.random()*20);
const num2 = Math.floor(Math.random()*10);
const ans = num1 * num2;

qusEl.innerText=`What will be ${num1} Multiply by ${num2} ?`;


formEl.addEventListener("submit",(e)=>{
//    e.preventDefault();
   const myans = +inputEl.value;
   inputEl.value = '';
   console.log(myans,typeof myans);
   if(myans === ans){
    score++;
    setlLocalStorage();
   }
   else{
    score--;
    setlLocalStorage();
   }
})

function setlLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}



