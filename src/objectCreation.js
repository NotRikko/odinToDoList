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
    return {
        title: title,
        description: description,
    }
}

export {ToDoItem, ProjectItem}