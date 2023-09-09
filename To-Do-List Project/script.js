// script.js
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            createTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                createTask(taskText);
                taskInput.value = "";
            }
        }
    });

    function createTask(text) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${text}</span>
            <button class="delete-btn">Delete</button>
        `;
        listItem.querySelector("button").addEventListener("click", function () {
            taskList.removeChild(listItem);
        });
        listItem.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });
        taskList.appendChild(listItem);
    }
});