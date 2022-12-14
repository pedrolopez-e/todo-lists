var projects = [];

// Create the class from which projects and task will inherit
class TodoItem {

    constructor(title,dueDate,priority,difficulty,id) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.difficulty = difficulty;
        this.id = id;
    }
};

//Create project class
class Project extends TodoItem {

    constructor(title,dueDate,priority,difficulty, description, tasks) {
        super(title,dueDate,priority,difficulty);
        this.description = description;
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

//Create task object
class Task extends TodoItem {

    constructor(title,dueDate,priority,difficulty) {
        super(title,dueDate,priority,difficulty);
    }
}


// Add functions to add items to arrays
function addItem(array, item){
    array.push(item);
};


function removeItem(array,item){
    let index = array.indexOf(item);
    if (index == -1) {
        console.log("There is no such object in the array");
        return;
    }
    array.splice(index, 1);
};

export { projects };