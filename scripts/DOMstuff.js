import {projects,Project,Task,TodoItem} from "./classes.js";

const projectForm = `<form action="" class="project-form">
<h2>New project</h2>
<input type="text" name="project-name" placeholder="Name">
<input type="date" name="project-due-date" placeholder="Due date">
<select id="dificulty" name="dificulty">
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
</select>
<button class="submit-button">Submit</button>
</form>`;

const body = document.querySelector('body');
const addButton = document.querySelector('.add-button');
const projectsContainer = document.querySelector('.projects-container');

renderProjects();

function showProject(project) {
    let projectsContainer = document.querySelector('.projects-container');
    let projectContainer = document.createElement('div');
    let projectName = document.createElement('h2');
    let projectDueDate = document.createElement('div');
    let projectDifficulty = document.createElement('div');
    
    projectName.innerHTML = project.title;
    projectDueDate.innerHTML = project.dueDate;
    projectDifficulty.innerHTML = project.difficulty;

    projectName.setAttribute("class", "grid-item");
    projectDueDate.setAttribute("class", "grid-item");
    projectDifficulty.setAttribute("class", "grid-item");

    projectContainer.setAttribute("class", "project");

    projectsContainer.appendChild(projectContainer);
    projectContainer.appendChild(projectName);
    projectContainer.appendChild(projectDueDate);
    projectContainer.appendChild(projectDifficulty);
}

function renderProjects() {
    let projectArray = document.querySelectorAll('.project');
    projectArray.forEach(project => project.remove());
    projects.forEach( project => showProject(project));
};

addButton.addEventListener('click', () => {
        let form = document.createElement('form');
        let blur = document.createElement('div');
        let formTitle = document.createElement('h2');
        let projectName = document.createElement('input');
        let projectDueDate = document.createElement('input');
        let projectDifficulty = document.createElement('select');
        let difficultyLabel = document.createElement('label');
        let easy = document.createElement('option');
        let medium = document.createElement('option');
        let hard = document.createElement('option');
        let submit = document.createElement('button');
        let formElements = [formTitle,projectName,projectDueDate,difficultyLabel,projectDifficulty,submit];
        let selectElements = [easy, medium, hard];

        body.appendChild(form);
        body.appendChild(blur)
        formElements.forEach((element) => {
            form.appendChild(element);
        })
        selectElements.forEach((option) => {
            projectDifficulty.appendChild(option);
        })

        formTitle.innerHTML = "New project";
        projectName.setAttribute("class", "input");
        projectDueDate.setAttribute("class", "input");
        projectDueDate.setAttribute("type", "date");
        projectDifficulty.setAttribute("class", "input");
        projectName.setAttribute("placeholder", "Name");
        projectDueDate.setAttribute("placeholder", "Due date");
        projectDifficulty.setAttribute("placeholder", "Difficulty");
        projectDifficulty.setAttribute("id", "difficulty");
        difficultyLabel.setAttribute("for", "difficulty");
        difficultyLabel.innerHTML = "Difficulty: ";
        easy.setAttribute("value", "easy");
        easy.innerHTML = "Easy";
        medium.setAttribute("value", "medium");
        medium.innerHTML = "Medium";
        hard.setAttribute("value", "hard");
        hard.innerHTML = "hard";
        submit.innerHTML = "Submit";
        blur.setAttribute("class", "blur");

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let values = [];
            form.querySelectorAll('.input').forEach(field => values.push(field.value));
            let newProject = new Project(...values);
            projects.push(newProject);
            newProject.id = projects.indexOf(newProject);
            renderProjects(); 
            form.remove();
            blur.remove();
        })
})