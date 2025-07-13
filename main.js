import { router } from "./src/router/router.js";
import { navigateTo } from "./src/router/navigateTo.js";
import Navbar from "./src/components/navbar.js";

// Initial route setup
window.addEventListener("DOMContentLoaded", router);

// Handle browser navigation (back/forward)
window.addEventListener("popstate", router);

// Intercept internal link clicks
document.addEventListener("click", (e) => {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

const navbar = document.getElementById('nav');
navbar.innerHTML = Navbar();