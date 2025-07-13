import { routes } from "./routes.js";

//accessing the main website section
const app = document.getElementById("app");


export function router() {
    //accessing the current path
    const path = window.location.pathname;

    //dynamically handling each blog page
    if(path.startsWith == "/blog/"){
        const id = path.split("/")[2];
        app.innerHTML = routes['/blog'](id);
        return;
    }

    //calling the page components according to the path
    const route = routes[path];
    app.innerHTML = route();
}
