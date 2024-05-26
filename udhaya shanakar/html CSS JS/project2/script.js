const openBtn = document.querySelector(".main");
const subContent = document.getElementById("sub-content");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", (e) => {
    subContent.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    subContent.style.display = "none";
});

window.addEventListener("click", (e) => {
   if(e.target === subContent){
    subContent.style.display = "none";
   }
});