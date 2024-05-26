const textarea = document.getElementsByClassName("text-area")[0];
const person = document.getElementsByClassName("person")[0];
const btn = document.getElementsByClassName("btn")[0];


const quotes = [
    {qoute:"vanaam athu boomi nee oru kattru kadhal ennai kola",
     person:"RIO"},

     {qoute:"enn uyir purosha nee ellaml nan ellai purosha",
     person:"BIRAVI"}
]

btn.addEventListener("click",()=>{
    
    let random = Math.floor(Math.random()*quotes.length)
    
    textarea.innerHTML = quotes[random].qoute;
    person.innerHTML = quotes[random].person;


})