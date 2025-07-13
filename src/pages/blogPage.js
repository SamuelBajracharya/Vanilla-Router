import { blogsData } from "../data/blogList.js";
import SimilarBlogs from "../components/similarBlogs.js";

const BlogPage = () => {
  const path = window.location.pathname;
  const paramsId = path.split("/")[2];
  const blog = blogsData.find((data) => data.id == paramsId);

  return `
  <div class="container">
  <main>
  <article class="post">
  <h2>${blog?.title}</h2>
  <p>${blog?.excerpt}</p>
  <div class="meta">Posted on ${blog?.date} by ${blog?.author}</div>
  <p>${blog?.content}</p>
  
  </article>
  </main>
  
  <aside class="sidebar">
    ${SimilarBlogs(paramsId)};
  </aside>
  </div>
  `;
};

export default BlogPage;
