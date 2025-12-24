let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form input");
let taskDetailsInput = document.querySelector(".addTask form textarea");
let taskCheckBox = document.querySelector(".addTask form #check");
var currentTask = [];
function openFeature() {
  var allElems = document.querySelectorAll(".elems");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var fullElemPageBack = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });
  fullElemPageBack.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "none";
    });
  });
}
openFeature();
function Todos(){
    function renderTask() {
  let allTask = document.querySelector(".allTask");
  let sum = "";
  currentTask.forEach(function (elem, idx) {
    sum =
      sum +
      `<div class="task">
  <details>
    <summary>
      <h5>
        ${elem.task}
        <span class="${elem.imp}">imp</span>
      </h5>
      <span class="view">View Details</span>
    </summary>

    <p>${elem.details}</p>
  </details>

  <button id="${idx}">Mark As Completed</button>
</div>
`;
  });

  allTask.innerHTML = sum;
  localStorage.setItem("currentTask", JSON.stringify(currentTask));
}
if (localStorage.getItem("currentTask")) {
  currentTask = JSON.parse(localStorage.getItem("currentTask"));
} else {
  console.log("Task List is Empty");
}
renderTask();
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(taskInput.value, taskDetailsInput.value, taskCheckBox.checked);
  currentTask.push({
    task: taskInput.value,
    details: taskDetailsInput.value,
    imp: taskCheckBox.checked,
  });
  renderTask();

  location.reload();
});
let markAllRead = document.querySelectorAll(".task button");
markAllRead.forEach(function (btn) {
  console.log("Hello", btn.id);
  btn.addEventListener("click", function () {
    currentTask.splice(btn.id, 1);
    renderTask();
    location.reload();
  });
});

}
Todos();