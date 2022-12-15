var projects = [];

// Create the class from which projects and task will inherit
class TodoItem {

    constructor(title,dueDate,difficulty) {
        this.title = title;
        this.dueDate = dueDate;
        this.difficulty = difficulty;
    }
};

//Create project class
class Project extends TodoItem {

    constructor(title,dueDate,difficulty) {
        super(title,dueDate,difficulty);
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

export {TodoItem,Project,Task,projects};
