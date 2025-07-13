import BlogCard from "../components/blogCard.js";
import { blogsData } from "../data/blogList.js";

const Blogs = () => {
  return `
    <div class="container">
        <main>
        ${
        blogsData?.map(blog => BlogCard(blog)).join('')
        }
        </main>
    </div>
    `;
};

export default Blogs;