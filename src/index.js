import './styles.css';
import { loadFromStorage } from './storage.js';
import { createProjectManager } from './projectmanager.js';
import { renderSidebar, renderTasks } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const manager = loadFromStorage() ?? createProjectManager()
    renderSidebar(manager)
    renderTasks(manager, manager.projectsManager[0].uuid)
})