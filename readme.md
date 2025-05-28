# Project Hub

Project Hub is a modern, full-stack project management platform designed to help teams organize, track, and deliver projects efficiently. Built with a robust Node.js/Express backend and a feature-rich React/TypeScript frontend, Project Hub streamlines workflows, enhances collaboration, and boosts productivity for teams of all sizes.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Core Modules](#core-modules)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Workspace Management**: Create and manage multiple workspaces for different teams or organizations.
- **Project Management**: Organize projects within workspaces, assign emojis, descriptions, and GitHub URLs.
- **Task Management**: Create, assign, and track tasks with priorities, statuses, due dates, and assignees.
- **Team Collaboration**: Add members, assign roles (Owner, Admin, Member), and manage permissions.
- **Kanban Board & Table View**: Visualize tasks in Kanban or table format for flexible workflows.
- **Calendar Integration**: View tasks and deadlines in a calendar view for better planning.
- **Reporting & Analytics**: Generate insightful reports and dashboards to measure team performance and project success.
- **Role-Based Access Control**: Secure access with granular permissions for workspace and project actions.
- **Responsive UI**: Modern, accessible, and responsive design using Tailwind CSS and Radix UI.
- **Notifications & Toasts**: Real-time feedback for user actions and system events.
- **GitHub Integration**: Link projects to GitHub repositories for seamless code collaboration.

---

## Tech Stack

**Frontend:**
- React, TypeScript, Vite
- Tailwind CSS, Radix UI, Lucide Icons
- React Query for data fetching and caching
- Zod for schema validation

**Backend:**
- Node.js, Express
- MongoDB, Mongoose
- Passport.js for authentication
- Zod for request validation

---

## Folder Structure

```
backend/
  src/
    controllers/      # Express route controllers
    models/           # Mongoose models (User, Workspace, Project, Task, etc.)
    routes/           # API route definitions
    services/         # Business logic and database operations
    validation/       # Zod schemas for validation
    middlewares/      # Express middlewares (auth, error handling, etc.)
    enums/            # Enum definitions (roles, statuses, priorities)
    config/           # App and database configuration
    utils/            # Utility functions

client/
  src/
    components/       # Reusable UI and feature components
    page/             # Page-level components (Landing, Auth, Workspace, etc.)
    hooks/            # Custom React hooks
    lib/              # API utilities, helpers
    constant/         # Enum and constant definitions
    index.css         # Tailwind and global styles
    App.tsx           # Main app component
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or cloud)

### Installation

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/project-hub.git
cd project-hub
```

#### 2. Setup Backend

```sh
cd backend
cp .env.example .env   # Configure your MongoDB URI and other settings
npm install
npm run dev            # Starts the backend server on default port
```

#### 3. Setup Frontend

```sh
cd client
cp .env.example .env   # Set VITE_API_URL to your backend server
npm install
npm run dev            # Starts the frontend (Vite) server
```

Visit [http://localhost:5173](http://localhost:5173) to use the app.

---

## Core Modules

### Workspace

- Create, edit, and delete workspaces.
- Invite and manage members with different roles.
- Each workspace can contain multiple projects.

### Project

- Create, edit, and delete projects within a workspace.
- Assign emoji, description, and GitHub URL to each project.
- Projects contain tasks and can be filtered or searched.

### Task

- Create, edit, assign, and track tasks.
- Fields: title, description, status (Backlog, Todo, In Progress, In Review, Done), priority (Low, Medium, High), due date, assignee.
- Visualize tasks in Kanban board, table, or calendar view.
- Filter and search tasks by status, priority, assignee, and keyword.

### Member & Roles

- Add members to workspaces and assign roles: Owner, Admin, Member.
- Role-based permissions for workspace and project management.
- Change roles and remove members as needed.

### Analytics & Reporting

- View project analytics and progress.
- Generate reports on tasks, deadlines, and team performance.

---

## Customization

- **Theming**: Easily customize colors and styles via [client/tailwind.config.js](client/tailwind.config.js) and [client/src/index.css](client/src/index.css).
- **Extensible**: Add new features, integrations, or custom modules as needed.
- **API**: RESTful API endpoints for all core resources.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or improvements.

---

## License

[MIT](LICENSE)

---

**Keywords:** project management, task tracking, team collaboration, React, Node.js, MongoDB, open source, productivity, analytics, workflow, SaaS
