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

            <article class="post">
            <h3>How to Build a Blog from Scratch</h3>
            <div class="meta">Posted on July 10, 2025 by Jane Doe</div>
            <p>Building a blog can be simple and fun! Learn the basics of HTML, CSS, and how to structure your content for readability.</p>
            <a href="blogs.html#post2" class="read-more">Read More →</a>
            </article>

            <article class="post">
            <h3>Design Tips for Your Blog</h3>
            <div class="meta">Posted on July 5, 2025 by John Smith</div>
            <p>Good design enhances user experience. Discover key tips on color schemes, typography, and layout to keep your readers engaged.</p>
            <a href="blogs.html#post3" class="read-more">Read More →</a>
            </article>
        </section>
        </main>
    </div>

    `;
};

export default HomePage;
