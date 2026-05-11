import { createProject, findProject } from "./project";

export function createProjectManager() {
    return {
        projectsManager: [createProject('Default')],
    }
};

export  function reorderProjects(manager,projectID, toIndex) {
    const projectToMoveIndex = manager.projectsManager.findIndex(p => p.uuid === projectID);
    const projectToMove = manager.projectsManager.splice(projectToMoveIndex, 1);
    manager.projectsManager.splice(toIndex, 0, projectToMove[0]);
};