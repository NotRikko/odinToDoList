import { popUpFormMethods, projectDOM } from "./DOMLogic";

const createToDoItemBtn = document.getElementById("createNewToDo");
const createProjectItemBtn = document.getElementById("createNewProject");
const viewProjectsBtn = document.getElementById("projectCatalog")

createToDoItemBtn.addEventListener("click", function() {
    if(document.getElementById("popUpContainer")) {
        return
    }
    popUpFormMethods.createToDoPopUpForm();
});

createProjectItemBtn.addEventListener("click", function() {
    if(document.getElementById("popUpContainer")) {
        return
    }
    popUpFormMethods.createProjectForm();
})

viewProjectsBtn.addEventListener("click", function() {
    if(document.getElementById("projectViewer")) {
        return
    }
    projectDOM.displayAllProjects();
})
