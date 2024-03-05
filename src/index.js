import { popUpFormMethods } from "./DOMLogic";

let createToDoItemBtn = document.getElementById("createNewToDo");

/*createToDoItemBtn.addEventListener("click", popUpFormMethods.createToDoPopUpForm());*/

createToDoItemBtn.addEventListener("click", function() {
    if(document.getElementById("popUpContainer")) {
        return
    }
    popUpFormMethods.createToDoPopUpForm();
});