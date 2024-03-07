import {ToObjectMethods} from './ToDoObjectMethods';
import {ToDoItem} from './objectCreation';
import {containsObject} from './commonFuncs';
import { ProjectItem } from './objectCreation';

const ProjectManager =(() => {
    const ProjectList = [];

    function createProjectItem(title, description) {
        const newItem = ProjectItem(title, description);
        ProjectList.push(newItem);
    }
    
    function deleteProject(ProjectItem) {
        let indexToDelete = containsObject(ProjectItem, ProjectList);
        if(indexToDelete !== false) {
            ProjectList.splice(indexToDelete, 1);
            return true
    
        }
        return false
    }

    function getProjectList() {
        return ProjectList.slice();
    }
    return {
        createProjectItem,
        deleteProject,
        getProjectList
    }
})();



const EditProjectMethods = () => {
    function editProjectProperty(ProjectItem, propertyName, newValue) {
        if(ProjectItem.hasOwnProperty(propertyName)) {
            ProjectItem[propertyName] = newValue;
        } else {
            throw new Error(`Property"${propertyName}" does not exist on ProjectItem`);
        }
    }

    return {
        editProjectProperty,
    }

}
export {ProjectManager, EditProjectMethods}

