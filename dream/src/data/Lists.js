import React from 'react'
import { Link } from 'react-router-dom'


const Lists = ({ blogs}) => {

  return (
    <div className="lists">
      {blogs.map((blog) => (
        <div>
          <div className="blog-preview" key={blogs.id}>
            <Link to={`/stories/${blog.id}`} style={{color: 'white', textDecoration: 'none'}}>
              <h2 style={{ marginBottom: 16 }}>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Lists