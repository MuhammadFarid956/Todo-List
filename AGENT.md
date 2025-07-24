# Agent Codebase Guide

## Build/Run Commands
- Open `index.html` in browser to run the Todo List application
- No build process required - static HTML/CSS/JS application

## Architecture & Structure
- Simple frontend-only Todo List application
- `index.html` - Main HTML structure with task form, filter buttons, and table
- `CSS/style.css` - Poppins font styling, responsive design with mobile queries
- `JS/main.js` - JavaScript for task CRUD operations, filtering, and DOM manipulation

## Code Style Guidelines
- **HTML**: Semantic structure with BEM-like class naming (form-bar, form-date, etc.)
- **CSS**: Uses Poppins font, CSS Grid/Flexbox, hover states, responsive breakpoints at 900px
- **JavaScript**: Vanilla JS with camelCase naming, DOM manipulation functions
- **Comments**: Uses `/* !Section */` for CSS sections, `// !Function` for JS functions
- **Colors**: Primary green (#28a475), danger red (#e74c3c), light gray backgrounds (#f0f2f5)
- **Functions**: Single responsibility, direct DOM manipulation without frameworks

## Key Components
- Task management: addTask(), deleteTask(), completeTask()
- Filter system: filterTasks() with all/pending/completed states
- Dropdown UI: toggleDropdown() with click-outside-to-close behavior
- Responsive table layout with hover effects and action buttons
