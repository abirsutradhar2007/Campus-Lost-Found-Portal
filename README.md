# Campus Lost & Found Portal

A simple campus portal for reporting and browsing lost and found items. This version is a front-end prototype built with HTML, CSS, and JavaScript, with browser `localStorage` used for temporary item data.

## Current Features

- Report lost or found items with category, description, location, date, and contact details
- Browse, search, filter, and delete reported items
- View total, lost, and found item counts on the home page
- Responsive, student-focused interface

## Run Locally

Open `index.html` in a modern browser, or serve the folder with any static web server. No build step or dependency installation is required.

## V2: Full-Stack Portal Roadmap

The next version will turn this prototype into a secure, role-based platform with separate student and administrator dashboards.

### Student Panel

- Account registration, login, and profile management
- Create, edit, and manage personal lost/found reports
- Browse items with search, category, status, and location filters
- Submit claim requests for found items and track request status
- Receive notifications when a claim is approved, rejected, or updated

### Admin Panel

- Secure admin authentication and dashboard overview
- Review, approve, edit, hide, or remove item reports
- Review claim requests and verify ownership before approval
- Manage users, categories, locations, and reported content
- View activity, resolution rates, and other portal statistics

### Technical Direction

- Frontend: modern component-based UI with responsive dashboards
- Backend: REST API with role-based access control and server-side validation
- Database: persistent users, items, claims, statuses, and audit records
- Security: hashed passwords, protected sessions/tokens, input validation, and authorization checks
- Media and notifications: item image uploads, email/in-app updates, and safe contact handling

## Suggested V2 Workflow

1. A student reports an item and the system stores it in the database.
2. The item becomes visible after moderation or automatic validation.
3. Another student submits a claim with ownership evidence.
4. An administrator reviews the claim and updates its status.
5. The claimant receives the decision and the item is marked resolved when returned.

## Project Structure

```text
index.html       Home dashboard
add_item.html    Report item form
itmes.html       Browse items page
CSS/             Page styles
JS/              Page scripts and localStorage logic
```

## Status

Current release: front-end prototype  
Next release: full-stack, role-based campus lost and found portal