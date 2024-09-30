const DEFAULTPROJECTNAME = "default";

// 1. Retrieve projects from localStorage (or initialize an empty array)
export function getProjects() {
    const projects = localStorage.getItem('projects');
    return projects ? JSON.parse(projects) : [];
}

// 2. Save the updated projects array back to localStorage
function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}
// createProject function (called by createTodo if the project doesn't exist)
function createProject(projectName = "Default Project") {
    const projects = getProjects();  // Get all projects

    // Check if the project with this name already exists
    const existingProject = projects.find(p => p.name === projectName);
    if (existingProject) {
        return existingProject;  // Return the existing project
    }

    // Create a new project object
    const newProject = {
        name: projectName,
        todos: []
    };

    // Save the new project
    projects.push(newProject);
    saveProjects(projects);

    return newProject;  // Return the new project
}

// createTodo function (calls createProject if needed)
export function createTodo(title, description, dueDate, projectName) {
    const projects = getProjects();
    projectName = projectName === "" || projectName === null ? DEFAULTPROJECTNAME : projectName;

    // Check if the project exists, if not, create one
    let project = projects.find(p => p.name === projectName);
    if (!project) {
        project = createProject(projectName);  // Creates or retrieves the project
        projects.push(project);
    }

    // Create the todo
    const newTodo = {
        title: title,
        description: description,
        dueDate: dueDate
    };

    // Add the todo to the project’s todos array
    project.todos.push(newTodo);

    // Save the updated project list to localStorage
    saveProjects(projects);

    console.log(`Todo created under project "${project.name}".`);
}

// Example Usage:
// createTodo("New Task", "This is a task", "2024-09-30", "Work Project");

// 3. Create a new project and save it


// Example Usage: Creating a new project called "Work Project"
// createProject("Work Project");


// export function createTodo(title,description,dueDate, projectName) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;

//     addItems(projectName === null || projectName === "" ? "default" : projectName,this);
// }

// export function getTodoItems(projectName = "default"){
//     return getItems(projectName);
// }

export function deleteTodoItem(projectName,index){
    const projects = getProjects();

    const currentProject = projects.find(p => p.name === projectName);
    if (index > -1) {
        currentProject.todos.splice(index, 1);
    }

    if(currentProject.todos.length === 0){
        const currentProjectIndex =  projects.findIndex(p => p.name === projectName)
        console.log(currentProjectIndex);
        deleteProject(0);
        return;
    }
    saveProjects(projects);
}

export function deleteProject(index){
    const projects = getProjects();
    if (index > -1) {
        projects.splice(index, 1);
    }
    saveProjects(projects);
}