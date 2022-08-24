const body = document.getElementById('main-content');
const form = document.getElementById("create-task-form");
const input = document.getElementById('new-task-description');
const submit = document.querySelector('input[type="submit"]');
submit.setAttribute("id", "submit");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //value
    const task = document.getElementById('new-task-description').value;
    //create li and button
    const task_el = document.getElementById('list');
    const task_content_elt = document.getElementById('tasks');
    const task_input_elt = document.createElement("li");
    const button = document.createElement("button");
    button.setAttribute("id", "delete");
    button.setAttribute("data-description", "task");
    //add value
    task_input_elt.textContent = task;
    button.textContent = "X";
    //append
    task_input_elt.appendChild(button);
    task_content_elt.appendChild(task_input_elt);

});

const button = document.querySelector("button");
const li = document.querySelector("li");
Array.from(button).forEach(function (button) {
    button.addEventListener('click', function (e) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    })
});

// button.addEventListener("click", function (e) {
//     const task_input_elt = document.querySelector("li");
//     task_input_elt.parentNode.removeChild(task_input_elt);
// });


