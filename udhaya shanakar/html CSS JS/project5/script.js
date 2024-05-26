window.scrollTo(0,500);

document.addEventListener("DOMContentLoaded", function(){
    var input = document.getElementById("input");
    var adder = document.querySelector(".add");
    var DivElement = document.getElementById("checkList-container");
    var body = document.body;

    adder.addEventListener("click", function() {
        if (input.value.trim() === ""){
            alert("Input is empty, write something...");
            return;
        }
        var div = document.createElement("div");
        div.classList.add("addlist");

        var p = document.createElement("p");
        p.classList.add("p");
        p.textContent = input.value;
        div.appendChild(p);

        var checkBtn = document.createElement("button");
        checkBtn.classList.add("CheckBtn");
        checkBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
        div.appendChild(checkBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
        div.appendChild(deleteBtn);

        DivElement.appendChild(div);
        input.value = "";
        
        checkBtn.addEventListener("click", function() {
            p.style.textDecoration = "line-through";
        });

        deleteBtn.addEventListener("click", function() {
            div.remove();
        });
    });

    input.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            adder.click();
        }
    });
});
