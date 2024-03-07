import { ToDoItem } from "./objectCreation";
import './style.css';
import { ProjectManager } from "./ProjectManager";


let ToDoItemArray = [];

const projectDOM = {
    displayAllProjects() {
        const projectViewer = document.createElement("div");
        projectViewer.setAttribute("id", "projectViewer");
        const projectList = ProjectManager.getProjectList();
        console.log(projectList);

        for(const project of projectList) {
            const projectDiv = document.createElement("div");
            projectDiv.setAttribute("class", "itemSquare");
            
            for(const property in project) {
                if (typeof project[property] !== 'function' && typeof project[property] !== 'object') {
                    const subDiv = document.createElement("div");
                    subDiv.textContent = `${property}: ${project[property]}`;
                    projectDiv.appendChild(subDiv);
                }
            }
            projectViewer.appendChild(projectDiv);
        }
        document.body.appendChild(projectViewer);
        return projectViewer;
    
    }   
}

const toDoItemDOM = {


    createToDoElement(ToDoItem) {
       
        const itemSquare = document.createElement("div");
        itemSquare.setAttribute("class", "itemSquare");

        for(const property in ToDoItem) {
            if (typeof ToDoItem[property] !== 'function' && typeof ToDoItem[property] !== 'object' && property != 'checkBox') {
                const subDiv = document.createElement("div");
                subDiv.textContent = `${property}: ${ToDoItem[property]}`;
                itemSquare.appendChild(subDiv);
            } else {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = ToDoItem[property];

                checkbox.addEventListener('change', function() {
                    if(this.checked) {
                        label.textContent = "Completed"
                    } else {
                        label.textContent = "Uncomplete"
                    }
                })
                const label = document.createElement("label");
                if (checkbox.checked) {
                    label.textContent = "Completed";
                } else {
                    label.textContent = "Uncomplete";
                }

                itemSquare.appendChild(label);
                itemSquare.appendChild(checkbox);
                

            }
        }

        let listContainer = document.getElementById("taskHolder");
        listContainer.append(itemSquare);

        return itemSquare;
    },

    displayAllToDoElements() {
        for (const item of ToDoItemArray) {
            console.log("creating!");
            this.createToDoElement(item);
        }
    },

    displayLatestToDoElement() {
        const lastIndex = ToDoItemArray.length - 1;
        const lastItem = ToDoItemArray[lastIndex];
        this.createToDoElement(lastItem);
    }
    

}; 

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
        const dueDateInput = this.createFormElement("input", { type: "date", name: "dueDate" });
        const priorityInput = this.createFormElement("input", { type: "text", name: "priority"});
        const noteInput = this.createFormElement("input", { type: "text", name: "notes"});
        const checkBox = this.createFormElement("input", { type: "checkbox", name: "checkBox" });
        const submitBtn = this.createFormElement("input", { type: "submit" });

        popUpForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            const checkBox = popUpForm.querySelector('input[name="checkBox"]');
            const checkBoxValue = checkBox.checked;
            const formData = new FormData(popUpForm);
            
            let toDoItem = ToDoItem(
                formData.get('title'),
                formData.get("description"),
                formData.get('dueDate'),
                formData.get('priority'),
                formData.get('notes'),
                checkBoxValue
            );
            
            
            console.log(toDoItem); 
            ToDoItemArray.push(toDoItem);
            console.log(ToDoItemArray);
            popUpContainer.parentNode.removeChild(popUpContainer);

            toDoItemDOM.displayLatestToDoElement();

            

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
    
    },

    createProjectForm() {
        const popUpContainer = document.createElement("div");
        popUpContainer.id = "popUpContainer";
        document.body.appendChild(popUpContainer);
        
        const popUpForm = this.createFormElement("form");
        const titleInput = this.createFormElement("input", { type: "text", name: "title" });
        const descriptionInput = this.createFormElement("input", {type: "text", name:"description"});
        const submitBtn = this.createFormElement("input", { type: "submit" });
        
        popUpForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            const formData = new FormData(popUpForm);
            
            let projectItem = ProjectManager.createProjectItem(
                formData.get('title'),
                formData.get("description"),
            );
            
            
            console.log(projectItem); 
            console.log(ProjectManager.getProjectList());
            popUpContainer.parentNode.removeChild(popUpContainer);

        })

        popUpForm.append(
            titleInput,
            descriptionInput,
            submitBtn
        );

        popUpContainer.appendChild(popUpForm);
    }
};


export {popUpFormMethods, projectDOM}
