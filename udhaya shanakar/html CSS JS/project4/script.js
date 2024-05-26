const timer = document.getElementsByClassName("timer")[0];
const startstop = document.getElementsByClassName("startstop")[0];
const reset = document.getElementsByClassName("reset")[0];

// varible initial declare
let hr =  0;
let min = 0;
let sec = 0;

//variable for leading Zero

let leadZeroHr = 0;
let leadZeroMin= 0;
let leadZeroSec = 0;

let stopWatchNow = "stopped" 


function stopWatch(){

    sec++;

    if(sec/60 === 1){
        min++;
        sec = 0;
        if(min/60 === 1){
            hr++;
            min = 0;
        }
    }

    if(sec < 10){
        leadZeroSec = "0" + sec.toString()
    }
    else{
        leadZeroSec = sec 
    }
    
    if(min < 10){
        leadZeroMin = "0" + min.toString() 
    }
    else{
        leadZeroMin = min
    }
    if(hr < 10){
        leadZeroHr = "0"+ hr.toString() 
    }
    else{
        leadZeroHr = hr 
    }
    timer.innerHTML = `${leadZeroHr}: ${leadZeroMin} : ${leadZeroSec}`
}

//  window.setInterval(stopWatch,1000)

startstop.addEventListener("click",()=>{

    if(stopWatchNow === "stopped"){
        start = setInterval(stopWatch,1000);
        startstop.innerHTML = "<i class='fa-solid fa-pause'></i>";
        stopWatchNow = "started"
    }

    else{
        clearInterval(start);
        startstop.innerHTML = "<i class='fa-solid fa-play'></i>";
        stopWatchNow = "stopped"
    }
})

reset.addEventListener("click",()=>{

    clearInterval(start)
    hr = 0;
    min = 0;
    sec = 0

    timer.innerHTML = "00 : 00 : 00";
    startstop.innerHTML = "<i class='fa-solid fa-play'></i>";
})



