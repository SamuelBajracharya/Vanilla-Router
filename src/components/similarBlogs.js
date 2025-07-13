import { blogsData } from "../data/blogList.js"

const SimilarBlogs = (id) => {
  const filteredData = blogsData.filter(data => data.id != id);
  return `
    <section class="recent-posts">
      <h3>Recent Posts</h3>
      <ul>
        ${filteredData.map(data => `
          <li><a href="/blog/${data.id}" data-link>${data.title}</a></li>
        `).join('')}
      </ul>
    </section>
  `;
}

export default SimilarBlogs;
