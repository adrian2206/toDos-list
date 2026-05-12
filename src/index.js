import './styles.css';
import { loadFromStorage } from './storage.js';
import { createProjectManager } from './projectManager.js';
import { renderSidebar, renderTasks } from './ui.js';
import { initEvents } from './EventListeners.js';


const manager = loadFromStorage() ?? createProjectManager();
renderSidebar(manager);
renderTasks(manager, manager.projectsManager[0].uuid);
initEvents(manager);
