var todos = document.querySelector(".todos");
var addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", createTodo);

function createTodo(e) {
  e.preventDefault();
  var newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  var li = document.createElement("li");
  li.innerHTML = "List";
  var checkBtn = document.createElement("button");
  checkBtn.classList.add("check-btn");
  checkBtn.innerHTML = '<i class="fa fa-plus"></i>';
  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = '<i class="fa fa-plus"></i>';
  newDiv.appendChild(li);
  newDiv.appendChild(checkBtn);
  newDiv.appendChild(deleteBtn);
  todos.appendChild(newDiv);
}
