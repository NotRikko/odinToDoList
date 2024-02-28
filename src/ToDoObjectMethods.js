import {ToDoItem} from './objectCreation';

const ToDoObjectMethods = () => {

    function editProperty(ToDoItem, propertyName, newValue) {
        if(ToDoItem.hasOwnProperty(propertyName)) {
            ToDoItem[propertyName] = newValue;
        } else {
            throw new Error(`Property"${propertyName}" does not exist on ToDoItem`);
        }
    }

    function clearProperty(ToDoItem, propertyName) {
        if(propertyName = checklist) {
            ToDoItem[checklist] = null;
        }
        if(ToDoItem.hasOwnProperty(propertyName)) {
            ToDoItem[propertyName] = "";
        }  else {
            throw new Error(`Property"${propertyName}" does not exist on ToDoItem`);
        }
    }



return {
    editProperty,
    clearProperty
}
}

export {ToDoObjectMethods}