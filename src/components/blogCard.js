const BlogCard = (blog) => {
    return `
    <article class="post">
        <h3>${blog?.title}</h3>
        <div class="meta">Posted on ${blog?.date} by ${blog?.author}</div>
        <p>${blog?.excerpt}</p>
        <a href="/blog/${blog?.id}" class="read-more" data-link>Read More →</a>
    </article>
    `
}

export default BlogCard;