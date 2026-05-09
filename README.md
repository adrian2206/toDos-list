# Todo List App

A dynamic and modular todo list application built with vanilla JavaScript and Webpack. Organize your tasks into projects, set priorities and due dates, and manage your productivity — all with persistent data storage via localStorage.

## Features

- 📁 **Project Management** — Create and manage multiple projects; all todos are assigned to a project, with a default project available on first load.
- ✅ **Todo Items** — Each todo includes a title, description, due date, priority level, and optional notes.
- 🔍 **Expandable Details** — View a summary of todos per project or expand individual items to see and edit full details.
- 🗑️ **Delete Todos** — Remove any todo item from any project.
- 🎨 **Priority Indicators** — Visual color coding based on todo priority level.
- 💾 **Persistent Storage** — Projects and todos are saved to localStorage, so your data survives page refreshes.
- 📅 **Date Handling** — Uses [date-fns](https://github.com/date-fns/date-fns) for clean and reliable date formatting and manipulation.
- 🧩 **Modular Architecture** — Application logic is cleanly separated from DOM manipulation using ES6 modules.

## Tech Stack

- JavaScript (ES6+)
- Webpack
- date-fns
- localStorage (Web Storage API)
