const navBtn = document.querySelector(".nav-btn")
const navLink = document.querySelector(".nav-link")
const navMain = document.querySelector(".navbar-main") 

navBtn.addEventListener("click",()=>{
    console.log("sammy")
    navMain.classList.toggle("show")
    navLink.classList.toggle("show")
})