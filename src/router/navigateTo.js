import { router } from "./router.js";

export function navigateTo(url) {
    window.history.pushState(null, null, url);
    router();
}