import React from 'react'

const Lists = ({blogs}) => {

  // const blogs = props.blogs
  
  return (
    <div className="lists">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blogs.id}>
          <h2 style={{ marginBottom: 16 }}>{blog.title}</h2>
          <h6>{blog.cat}</h6>
          <p>{blog.body}</p>
          <span>Written by {blog.author}</span>
        </div>
      ))}
    </div>
  )
}

export default Lists