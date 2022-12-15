import {projects,Project,Task,TodoItem} from "./list-functions.js";

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

function renderProjects() {
    projects.forEach( project => {
    }
    )
};

addButton.addEventListener('click', () => {
        let form = document.createElement('form');
        let formTitle = document.createElement('h2');
        let projectName = document.createElement('input');
        let projectDueDate = document.createElement('input');
        let projectDifficulty = document.createElement('select');
        let difficultyLabel = document.createElement('label');
        let easy = document.createElement('option');
        let medium = document.createElement('option');
        let hard = document.createElement('option');
        let submit = document.createElement('button');
        let formElements = [formTitle,projectName,projectDueDate,difficultyLabel,projectDifficulty];
        let selectElements = [easy, medium, hard];

        body.appendChild(form);
        formElements.forEach((element) => {
            form.appendChild(element);
        })
        selectElements.forEach((option) => {
            projectDifficulty.appendChild(option);
        })

        formTitle.innerHTML = "New project";
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
})