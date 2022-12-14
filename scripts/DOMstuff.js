import { projects } from "./list-functions.js";

projects.push("hola");
console.log(projects);

function renderProjects() {
    projects.forEach( project => 
        $(".projects-container").append(`<div class="project" data-id="${project.id}">
        <h3>${project.title}</h3></div>`)
        );
};
