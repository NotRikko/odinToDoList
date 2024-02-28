import { popUpFormMethods } from "./DOMLogic";

let createToDoItemBtn = document.getElementById("createNewToDo");

createToDoItemBtn.addEventListener("click", popUpFormMethods.createToDoPopUpForm)