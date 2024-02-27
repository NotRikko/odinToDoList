const toDoObject = (title, description, dueDate, priority, notes, checklist) => {

    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,
        checklist: checklist
    }
}

export {toDoObject}