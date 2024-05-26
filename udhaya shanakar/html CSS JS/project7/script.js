var container = document.getElementsByClassName("container")[0];

// var leftBtn = document.getElementsByClassName("left-Btn")[0];
// var rightBtn = document.getElementsByClassName("right-Btn")[0];

var button = document.querySelectorAll("button");

var asserts = [2271,2272,2274,2275,2276,2278,2282,2283,2284,2285,2286,2287,2288,2289,2290,2291,2292,2293]

// index = 0;

// leftBtn.addEventListener("click",()=>{
//     index--
//     if(index < 0){
//         index = asserts.length-1;
//     }
//     container.style.background = `url('./assert/Image${asserts[index]}.jpg') no-repeat center/ contain`
// })

// index = 0;

// rightBtn.addEventListener("click",()=>{
//     index++
//     if(asserts.length<=index){
//         index = 0;
//     }
//     container.style.background = `url('./assert/Image${asserts[index]}.jpg') no-repeat center/ contain`
// })

///////////////////////// Alternative method ///////////////////////////////////////

index = 0;

button.forEach((Btn)=>{
    Btn.addEventListener("click",()=>{
        if(Btn.classList.contains("left-Btn")){
            index--
            if(index<0){
                index = asserts.length-1
            } 
            container.style.background = `url('./assert/Image${asserts[index]}.jpg') no-repeat center/ contain`
        }
        else{
            index++;
            if(asserts.length<=index){
                index=0;
            }
            container.style.background = `url('./assert/Image${asserts[index]}.jpg') no-repeat center/ contain`
        }
    })
})
