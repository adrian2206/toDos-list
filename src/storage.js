export function saveToStorage(manager) {
    localStorage.setItem('managerJson', JSON.stringify(manager));
};

export function loadFromStorage() {
    const storedManager = localStorage.getItem('managerJson');
    if(storedManager) {
        return JSON.parse(storedManager)
    } else {
        return null;
    };
};