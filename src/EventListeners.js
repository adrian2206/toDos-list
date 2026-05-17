import { showProjectForm, renderSidebar, } from "./ui.js";
import { createProject, deleteProject } from "./project.js";
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

    document.querySelector('#projects-list').addEventListener('click', e => {
        if(e.target.dataset.projectId) {
            const li = e.target.parentElement
            const projectMenu = li.querySelector('.project-menu')
            projectMenu.classList.toggle('project-menu-hidden')
        }
    });

    document.addEventListener('click', e => {
        if(!e.target.closest('.project-menu') && !e.target.closest('.btn-project-menu')) {
            const openMenu = document.querySelector('.project-menu:not(.project-menu-hidden)')
            if(openMenu) openMenu.classList.add('project-menu-hidden')
        }

        if(!e.target.closest('.input-project-name') && !e.target.closest('.btn-confirm-project') && !e.target.closest('#btn-add-project')) {
            const projectForm = document.querySelector('.input-project-name');
           if(projectForm) projectForm.remove();
        }
    });

    document.querySelector('#projects-list').addEventListener('click', e=> {
        if(e.target.classList.contains('btn-delete-project')) {
            const project = e.target.closest('[project-id]');
            const projectID = project.getAttribute('project-id');
            deleteProject(manager, projectID);
            renderSidebar(manager);
            saveToStorage(manager);
        }
    })
};


