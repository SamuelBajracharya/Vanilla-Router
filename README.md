Vanilla Router
A lightweight single-page application (SPA) router built with vanilla JavaScript. This project demonstrates how to create a simple client-side routing system without relying on any frameworks or libraries.

Features
Client-side routing: Navigate between pages without full page reloads.

Dynamic routes support: Handle routes with parameters like /blog/:id.

History API integration: Uses history.pushState and popstate events to keep URL in sync.

SPA fallback compatibility: Works seamlessly with static servers that support SPA fallback like serve -s.

Minimal dependencies: Pure vanilla JavaScript, no build step required.

Modular structure: Clean separation of route definitions and render logic.
Getting Started
Prerequisites
Node.js installed (optional, for serving the project)

A static server that supports SPA fallback routing (recommended: serve)

Running Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/SamuelBajracharya/Vanilla-Router.git
cd Vanilla-Router/src
Serve the project with SPA fallback enabled:

bash
Copy
Edit
npx serve -s .
Open your browser and navigate to:

arduino
Copy
Edit
http://localhost:5000
Try navigating to routes like /about, /blog/1, and refresh the page to verify routing works as expected.

Usage
Navigation links use <a href="/path" data-link> attributes to prevent default reloads and enable SPA navigation.

The router listens to popstate events and URL changes to render the appropriate page.

Dynamic routes are matched with regular expressions and parameters are extracted automatically.
