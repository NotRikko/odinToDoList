const ToDoItem = (title, description, dueDate, priority, notes, checklist) => {

    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: Array.isArray(notes) ? notes: [notes],
        checklist: checklist
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