const btn = document.querySelectorAll(".btn");
const search = document.querySelector("#search");
const boxes = document.querySelectorAll(".box");
const container = document.querySelector(".no-data-found");
const close = document.querySelector(".close");

search.addEventListener("keyup", (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    count = 0;
    totalCount = boxes.length;

    boxes.forEach((box) => {
        const data = box.dataset.item
        if (data.includes(searchText)) {
            box.style.display = "block";
            container.innerHTML = ""
            count++
        }
        else if (count > 0) {
            box.style.display = "none"
        }
        else {
            box.style.display = "none"
            container.innerHTML = `<p>no data found</p>`
            count = 0
        }
    })
    btn.forEach(button => {
        button.classList.remove("active");
    })
    btn[0].classList.add("active")
})

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        setActiveBtn(e)
        const btnfilter = button.dataset.filter; // other
        boxes.forEach((box) => {
            if (btnfilter === "all") {
                box.style.display = "block";
                container.innerHTML = "";
                search.value = "";
            }
            else {
                if (btnfilter === box.dataset.item) {
                    box.style.display = "block";
                    container.innerHTML = "";
                    search.value = "";
                }
                else{
                    box.style.display = "none";
                }
            }
        })

    })
})

function setActiveBtn(e) {
    btn.forEach(button => {
        button.classList.remove("active");
    })
    e.target.classList.add("active");
}

close.addEventListener("click", () => {
    search.value = ""
    search.focus()
    boxes.forEach((box) => {
        box.style.display = "block";
    })
    btn.forEach(button => {
        button.classList.remove("active");
    })
    btn[0].classList.add("active")
})