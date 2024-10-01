import "./styles.css"
import PubSub from "pubsub-js";
import { getProjects,deleteTodoItemFromProject ,deleteProject} from "./createTodo"
import { generateModal } from "./modal";

function renderProjects() {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = ""; // Clear previous content
  
    const otherProjects = getOtherProjects();
    
    otherProjects.forEach((project,projectIndex) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      
      // Project Name
      const projectName = document.createElement("h3");
      projectName.textContent = project.name;
      projectCard.appendChild(projectName);
      
      // Todo List (collapsed view, just titles)
      const todoList = document.createElement("ul");
      project.todos.forEach((todo,todoIndex) => {
        const todoItem = document.createElement("li");
        todoItem.textContent = todo.title; // Display just the title

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
          deleteTodoItemFromProject(project.name, todoIndex);
          renderProjects();
        };
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
      });
      
      projectCard.appendChild(todoList);
      projectContainer.appendChild(projectCard);
    });
}



function renderMainCard() {
    const mainCardContainer = document.querySelector(".main-card-container");
    mainCardContainer.innerHTML = ""; // Clear previous content
    
    const defaultProject = getDefaultProject();
    if (!defaultProject) return; // If there's no default project, exit
  
    const mainCard = document.createElement("div");
    mainCard.classList.add("main-card");
  
    // Title for main card
    const mainCardTitle = document.createElement("h3");
    mainCardTitle.textContent = "General Todos"; // Title for default project
    mainCard.appendChild(mainCardTitle);
    
    // List of todos from the default project
    const todoList = document.createElement("ul");
    defaultProject.todos.forEach((todo,todoIndex) => {
      const todoItem = document.createElement("li");
      todoItem.textContent = todo.title; // Display just the title for now


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      deleteTodoItemFromProject(defaultProject.name, todoIndex); 
      renderMainCard();
    };
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    });
  
    mainCard.appendChild(todoList);
    mainCardContainer.appendChild(mainCard);
}

function getDefaultProject() {
    let projects = getProjects();
    return projects.find(project => project.name === "default");
}

function getOtherProjects() {
    let projects = getProjects();
    return projects.filter(project => project.name !== "default");
}

let todoModal = generateModal(); 
content.appendChild(todoModal);

// Show modal
function showModal() {
    todoModal.classList.add("is-visible");
}

// Hide modal
function hideModal() {
    todoModal.classList.remove("is-visible");
}

// Attach events
function addTodo() {
    const addTodoBtn = document.querySelector(".addTodoBtn");
    addTodoBtn.onclick = showModal;
    let closebtn = todoModal.querySelector(".closeBtn");
    closebtn.addEventListener("click", () => {
        console.log("close");
    })
}

renderMainCard();
renderProjects();
addTodo();