import { ToDoItem } from "./objectCreation";
import './style.css';

function displayToDoItems() {
    let toDoItemArray = [];

}

const popUpFormMethods = {

     createFormElement(elementType, attributes = {}) {
        const element = document.createElement(elementType)
        Object.assign(element, attributes);
        return element
     },
    
     createToDoPopUpForm() {
        const popUpContainer = document.createElement("div");
        popUpContainer.id = "popUpContainer";
        document.body.appendChild(popUpContainer);

        const popUpForm = this.createFormElement("form");
        const titleInput = this.createFormElement("input", { type: "text", name: "title" });
        const descriptionInput = this.createFormElement("input", {type: "text", name:"description"});
        const dueDateInput = this.createFormElement("input", { type: "date", name: "date" });
        const priorityInput = this.createFormElement("input", { type: "text", name: "priority"});
        const noteInput = this.createFormElement("input", { type: "text", name: "notes"});
        const checkBox = this.createFormElement("input", { type: "checkbox", name: "checkBox" });
        const submitBtn = this.createFormElement("input", { type: "submit" });
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
            console.log("deleted!");
            popUpContainer.parentNode.removeChild(popUpContainer);

        })
    
        popUpForm.append(
            titleInput,
            dueDateInput,
            descriptionInput,
            priorityInput,
            noteInput,
            checkBox,
            submitBtn
        );
        
        popUpContainer.appendChild(popUpForm);
    
        return popUpForm;
    }
};


export {popUpFormMethods}
