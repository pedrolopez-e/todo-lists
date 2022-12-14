var projects = [];

class TodoItem {

    constructor(title,description,dueDate,priority,difficulty) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.difficulty = difficulty;
    }

};

function addItem(item){
    projects.push(item);
};

function removeItem(item){
    let index = projects.indexOf(item);
    if (index == -1) {
        console.log("There is no such object in the array");
        return;
    }
    projects.splice(index, 1);
};

export {projects};