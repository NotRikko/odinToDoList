import { ToDoItem } from "./objectCreation";

function displayToDoItems() {
    let toDoItemArray = [];

}

const popUpFormMethods = () => {

    function createFormElement(elementType, attributes = {}) {
        const element = document.createElement(elementType)
        Object.assign(element, attributes);
        return element
    }
    
    function createToDoPopUpForm() {
        const popUpForm = createFormElement("form");
        const titleInput = createFormElement("input", { type: "text", name: "title" });
        const descriptionInput = createFormElement("input", {type: "text", name:"description"});
        const dueDateInput = createFormElement("input", { type: "date", name: "date" });
        const priorityInput = createFormElement("input", { type: "text", name: "priority"});
        const noteInput = createFormElement("input", { type: "text", name: "notes"});
        const checkBox = createFormElement("input", { type: "checkbox", name: "checkBox" });
        const submitBtn = createFormElement("input", { type: "submit" });
        submitBtn.addEventListener("click", ToDoItem)

        popUpForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            const formData = new FormData(popUpForm);
            
            const toDoItem = ToDoItem(
                formData.get('title'),
                formData.get("description"),
                formData.get('dueDate'),
                formData.get('priority'),
                formData.get('notes'),
                formData.get('checkBox')
            );
            
            console.log(toDoItem); 
        })
    
        popUpForm.append(
            titleInput,
            dueDateInput,
            priorityInput,
            noteInput,
            checkBox,
            submitBtn
        );
    
        return popUpForm;
    }
    return createToDoPopUpForm
}


export {popUpFormMethods}
