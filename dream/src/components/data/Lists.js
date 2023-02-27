import React from 'react'
import { Link } from 'react-router-dom'
// import remove from '../images/trash.svg'
// import add from '../images/journal-plus.svg'

// import { Link } from 'react-router-dom'

const Lists = ({ blogs, handleDelete }) => {

  // const blogs = props.blogs


  return (
    <div className="lists">
      {blogs.map((blog) => (
        <div>
          <div className="blog-preview" key={blogs.id}>
            <Link to={`/blogs/${blog.id}`} style={{color: 'white', textDecoration: 'none'}}>
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