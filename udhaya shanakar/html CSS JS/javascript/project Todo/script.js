let TodoList = JSON.parse(localStorage.getItem("TodoList"));

if(!TodoList){
  TodoList = [{name:"javascript",date:"2025-05-23"}]
}

AddTodoHTML()
function AddTodoHTML() {
  let TodoHtml = ""
  if(TodoList[0] === undefined){
    document.querySelector(".Todolist-container").innerHTML = TodoHtml
  }
  TodoList.forEach((todoObject,i) => {
    let { name, date } = todoObject;
    TodoHtml += `<div class="para para${i}">${name}</div> 
    <div class="js-date js-date${i}">${date}</div>
    <div class="btn-update${i}"><button onclick="Edit(${i})" class="btn-update">Edit</button></div> 
    <button onclick="deleted(${i})" class="btn-delete btn-delete${i}">Delete</button>`;
     document.querySelector(".Todolist-container").innerHTML = TodoHtml
  }
  )
}

function Edit(item) {
  let Editpara = document.querySelector(`.para${item}`)
  let EditDate = document.querySelector(`.js-date${item}`)
  document.querySelector(`.btn-update${item}`).innerHTML = `<button onclick="update(${item})" class="btn-update">update</button>`
  let updateitem = TodoList[item]
  Editpara.innerHTML = `<input value=${updateitem.name} class="updateParaInput">`
  EditDate.innerHTML = `<input type="date" value=${updateitem.date} class="updateDateInput">`
}

function update(item) {
  let updatedName = document.querySelector(".updateParaInput").value
  let updatedDate = document.querySelector(".updateDateInput").value
  let Updateitems = TodoList[item]
  Updateitems.name = updatedName
  Updateitems.date = updatedDate
  document.querySelector(`.btn-update${item}`).innerHTML = `<button onclick="Edit(${item})" class="btn-update">Edit</button>`
  localStorage.setItem("TodoList", JSON.stringify(TodoList))
  AddTodoHTML();
}

function deleted(item) {
  TodoList.splice(item, 1)
  localStorage.setItem("TodoList", JSON.stringify(TodoList))
  AddTodoHTML()
}

function Add() {
  let inputvalue = document.querySelector(".input")
  let dateValue = document.querySelector(".date")
  let name = inputvalue.value
  let date = dateValue.value
  if (name && date) {
    let TodoObject = {
      name,
      date
    }
    TodoList.push(TodoObject)
    localStorage.setItem("TodoList", JSON.stringify(TodoList))
    inputvalue.value = ""
    dateValue.value = ""
    inputvalue.blur()
    AddTodoHTML()
  }
  else {
    alert("Please fill the input field")
  }
}

// list -> html content using loops
// input get -> list store
