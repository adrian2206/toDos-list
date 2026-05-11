export function createTask(name, status, description, startDate, dueDate, project, priority, notes = '', checklist = []) {
    return {
        uuid: crypto.randomUUID(),
        name,
        status,
        description,
        startDate,
        dueDate,
        project,
        priority,
        notes,
        checklist,
    }
};

export function getTaskById(project, taskId) {
    return project.task.find(t => t.uuid === taskId)
};

export function updateTask(project, taskId, changes) {
    const taskToUpdate = getTaskById(project, taskId);
    if(taskToUpdate){
        Object.assign(taskToUpdate, changes)
    }
};

export function removeTask(project, taskId) {
     project.tasks = project.tasks.filter(t => t.uuid !== taskId);
}

export function addTask(project, task) {
    project.tasks.push(task)
}