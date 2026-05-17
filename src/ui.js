import { findProject } from "./project.js";
import moreIcon from '../assets/more_vert_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

export function renderSidebar(manager) {
    const projectsList = document.querySelector('#projects-list');
    projectsList.innerHTML = '';
    manager.projectsManager.forEach(p => {
{       const project = document.createElement('li');
        project.setAttribute('project-id', `${p.uuid}`);
        if(p.name !== 'Default') {
            project.innerHTML = `${p.name}
                <button class="btn-project-menu" data-project-id="${p.uuid}" type="button"><img src="${moreIcon}" height="24px" width="24px"></button>
                <ul class="project-menu project-menu-hidden">
                <li>
                    <button class="btn-delete-project" type="button">Delete</button>
                    </li>
                </ul>
                `;
            } else {
                project.innerHTML = `${p.name}`
            }
        projectsList.appendChild(project);}
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
    if(document.querySelector('.input-project-name')) return
    const projectsList = document.querySelector('#projects-list');
    projectsList.insertAdjacentHTML('beforeend', `
        <li class="input-project-name">
            <input type="text" id="project-name" placeholder="Project name..." required/>
            <button class="btn-confirm-project" id="btn-confirm-project" type="submit">✓</button>
        </li>
    `);
};