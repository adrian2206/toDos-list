import { findProject } from "./project.js";

export function renderSidebar(manager) {
    const projectsList = document.querySelector('#projects-list');
    projectsList.innerHTML = '';
    manager.projectsManager.forEach(p => {
        const project = document.createElement('li');
        project.setAttribute('project-id', `${p.uuid}`);
        project.innerHTML = `${p.name}`;
        projectsList.appendChild(project);
    });
};

export function renderTasks(manager, projectId) {
    const selectedProject = findProject(manager, projectId);
    const tasksList = document.querySelector('#tasks-list');
    tasksList.innerHTML = '';
    selectedProject.tasks.forEach(t => {
        const task = document.createElement('li');
        task.setAttribute('task-id', `${t.uuid}`);
        task.innerHTML = `${t.name}`;
        tasksList.appendChild(task);
    });
};

export function showProjectForm() {
    const projectsList = document.querySelector('#projects-list');
    projectsList.insertAdjacentHTML('beforeend', `
        <li class="input-project-name">
            <input type="text" id="project-name" placeholder="Project name..." required/>
            <button class="btn-confirm-project" id="btn-confirm-project" type="submit">✓</button>
        </li>
    `);
};