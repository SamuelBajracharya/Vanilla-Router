import { blogsData } from "../data/blogList.js";
import BlogCard from "../components/blogCard.js";

const HomePage = () => {
  return `
    <div class="container">
        <main>
        <section>
            <h2>Welcome!</h2>
            <p>Welcome to My Generic Blog, your go-to place for insights on web development, design, and technology. Dive into our latest posts or explore what interests you most!</p>
        </section>

        <section style="margin-top: 40px;">
            <h2>Popular Blogs</h2>
            ${blogsData
              .filter((blog) => blog.todaysPopular)
              .map((blog) => BlogCard(blog))
              .join("")}
        </section>
        </main>
    </div>

    `;
};

export default HomePage;
