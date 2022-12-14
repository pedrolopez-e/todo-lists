import { projects } from "./list-functions.js";

projects.push("hola");
console.log(projects);

function renderProjects() {
    projects.forEach( project => 
        $(".projects-container").append(`<div class="project" data-id="${project.id}">
        <h3>${project.title}</h3></div>`)
        );
};

const projectForm = `<form action="" class="add-project-form">
<h2>New project</h2>
<input type="text" name="project-name" placeholder="Name">
<input type="date" name="project-due-date" placeholder="Due date">
<select id="dificulty" name="dificulty">
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
</select>
</form>`;

$(".add-button").on('click', () => {
    $("body").append(projectForm);
});

/* <form action="" class="add-project-form">
    <h2>New project</h2>
    <input type="text" name="project-name" placeholder="Name">
    <input type="date" name="project-due-date" placeholder="Due date">
    <select id="dificulty" name="dificulty">
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
    </select>
</form> */
