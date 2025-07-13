const BlogPage = () => {
    return `
    <div class="container">
      <main>
        <article class="post">
          <h2>How to Build a Blog from Scratch</h2>
          <div class="meta">Posted on July 10, 2025 by Jane Doe</div>
          <p>
            Building a blog can be simple and fun! Learn the basics of HTML,
            CSS, and how to structure your content for readability.
          </p>

          <h3>Introduction</h3>
          <p>
            Creating your own blog gives you a platform to share your ideas with
            the world. This guide walks you through the essential steps.
          </p>

          <h3>Step 1: Plan Your Blog</h3>
          <p>
            Think about your blog's purpose, target audience, and the kind of
            content you want to share.
          </p>

          <h3>Step 2: Choose Your Tools</h3>
          <p>
            Decide whether to use static HTML/CSS or a blogging platform like
            WordPress or a framework like React.
          </p>

          <h3>Step 3: Design Your Layout</h3>
          <p>
            Keep your design clean and user-friendly. Use readable fonts and
            clear navigation.
          </p>

          <h3>Step 4: Write Content</h3>
          <p>
            Focus on quality posts that provide value. Use headings, images, and
            links to enrich your posts.
          </p>

          <h3>Conclusion</h3>
          <p>
            Building a blog is a rewarding experience. Start small, keep
            learning, and enjoy sharing your thoughts!
          </p>
        </article>
      </main>

      <aside class="sidebar">
        <section class="recent-posts">
          <h3>Recent Posts</h3>
          <ul>
            <li><a href="#">Welcome to My Blog</a></li>
            <li><a href="#">How to Build a Blog from Scratch</a></li>
            <li><a href="#">Design Tips for Your Blog</a></li>
            <li><a href="#">Choosing the Right Web Hosting</a></li>
            <li><a href="#">SEO Basics for Beginners</a></li>
          </ul>
        </section>
      </aside>
    </div>
    `
}

export default BlogPage;