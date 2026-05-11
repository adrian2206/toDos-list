export function createProject(name) {
    return {
        uuid: crypto.randomUUID(),
        name,
        tasks: []
    }
};

export function deleteProject(manager, projectId) {
    manager.projectsManager = manager.projectsManager.filter(p => p.uuid !== projectId);
};

export function findProject(manager, projectId) {
    return manager.projectsManager.find(p => p.uuid === projectId);
};

export function updateProject(manager,projectId, newName) {
    const projectToUpdate = findProject(manager, projectId);
    if(projectToUpdate) {
        projectToUpdate.name = newName;
    }
};


