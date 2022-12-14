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

projects.push("hola");
console.log(projects);

function renderProjects() {
    projects.forEach( project => 
        $(".projects-container").append(`<div class="project" data-id="${project.id}">
        <h3>${project.title}</h3></div>`)
        );
};

// This adds new project object to the projects array
$(".add-button").on('click', () => {
    $("body").append(projectForm);
    $(".project-form").on('submit', (e) => {
        e.preventDefault();
        let values = [];
        $(".project-form :input").each((field) => values.push(field.value));
        let newProject = new Project(...values);
        projects.push(newProject);
        $(".projects-container").empty();
        renderProjects();
        $(".project-form").remove();
    })
});