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

function renderProjects() {
    projects.forEach( project => 
        $(".projects-container").append(`<div class="project" data-id="${project.id}">
        <h3>${project.title}</h3></div>`)
        );
};