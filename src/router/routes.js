import HomePage from "../pages/HomePage.js";
import Blogs from "../pages/Blogs.js";
import AboutPage from "../pages/AboutPage.js";
import BlogPage from "../pages/BlogPage.js";

//creating a list of required routes
export const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/blogs": Blogs,
  "/blog": BlogPage,
  
};
