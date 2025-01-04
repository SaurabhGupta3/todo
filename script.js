const newbtn = document.querySelector("#newbtn");
const submit = document.querySelector("#submit-btn");
const formContainer = document.getElementById("form-container");
const allTodosContainer = document.getElementById("all");

class Todo {
    constructor(title, description, dueDate, priority, checkList) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
    }

    createTodoElement() {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-item");
        todoDiv.innerHTML = `
            <h3>${this.title}</h3>
            <p>Description: ${this.description}</p>
            <p>Due Date: ${this.dueDate}</p>
            <p>Priority: ${this.priority}</p>
            <p>Done: ${this.checkList ? "Yes" : "No"}</p>
        `;
        return todoDiv;
    }
}

newbtn.addEventListener("click", () => {
    formContainer.style.display = "block";
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("deuDate").value;
    let priority = document.getElementById("priority").value;
    let checkList = document.getElementById("checkList").checked;
    let todo = new Todo(title, description, dueDate, priority, checkList);
    let todoElement = todo.createTodoElement();
    allTodosContainer.appendChild(todoElement);
    document.getElementById("title").value = '';
    document.getElementById("description").value = '';
    document.getElementById("deuDate").value = '';
    document.getElementById("priority").value = '';
    document.getElementById("checkList").checked = false;
    formContainer.style.display = "none";
});
