 export let task1 = {
    uuid: 'bd0b946c-e5f2-4131-9d73-f47cb3a835ed',
    name: 'Task 1',
    status: 'Started',
    description: 'This is a description for a test task',
    startDate: '2026-05-01',
    dueDate: '2026-05-30',
    project: 'Default',
    priority: 'High',
    notes: 'This is a note for a test task.',
    checklist: [
        {id:1, text: 'Subtask 1', done:true},
        {id:2, text: 'Subtask 2', done:false},
        {id:3, text: 'Subtask 3', done:false}
    ]
};

 export function createTask(name, status, description, startDate, dueDate, project, priority, notes = '', checklist = []) {
    return {
        uuid: crypto.randomUUID(),
        name: name,
        status: status,
        description: description,
        startDate: startDate,
        dueDate: dueDate,
        project: project,
        priority: priority,
        notes: notes,
        checklist: checklist
    }
};