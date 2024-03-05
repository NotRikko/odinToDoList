const ToDoItem = (title, description, dueDate, priority, notes, checkBox) => {

    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,
        checkBox: checkBox
    }
}

const ProjectItem = (title, description) => {
    let toDoList = [];
    ToDoItem("Title", "", "", 1, "", false)
    toDoList.push(ToDoItem);
    return {
        title: title,
        description: description,
        toDoList: toDoList
    }
}

export {ToDoItem, ProjectItem}