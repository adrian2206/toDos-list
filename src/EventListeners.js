import { showProjectForm, renderSidebar } from "./ui.js";
import { createProject } from "./project.js";
import { saveToStorage } from "./storage.js";
import { addProject } from "./projectManager.js";

export function initEvents(manager) {
    document.querySelector('#btn-add-project').addEventListener('click', () => {
            showProjectForm();
            const projectsList = document.querySelector('#projects-list');
            const input = document.querySelector('#project-name')
            const confirmButton = document.querySelector('#btn-confirm-project');
            function handleCreateProject(manager) {
                const name = document.querySelector('#project-name').value;
                const project = createProject(name);
                addProject(manager, project);
                renderSidebar(manager);
                saveToStorage(manager);
            }
            confirmButton.addEventListener('click', () => handleCreateProject(manager));
            input.addEventListener('keydown', e => {
                 if(e.key === 'Enter') handleCreateProject(manager);
            });
    });
};


