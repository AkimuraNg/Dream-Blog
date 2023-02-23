import React from 'react'
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
            <h2 style={{ marginBottom: 16}}>{blog.title}</h2>
            <h6>{blog.cat}</h6>
            <p>{blog.body}</p>
            <p>Written by {blog.author}</p>
            {/* <div className="btnGroup">
              <button className="btn-secondary fBtn" style={{ borderRadius: '70%' }} onClick={() => handleDelete(blog.id)}>
                <img src={remove} alt="delete" />
              </button>
              <button className="fBtn" style={{ borderRadius: '70%' }} onClick={() => handleDelete(blog.id)}>
                <img src={remove} alt="delete" />
              </button>
              <Link className="btn fBtn" to="/create" style={{ borderRadius: '70%' }} onClick={() => handleDelete(blog.id)}>
                <img src={remove} alt="delete" />
              </Link>
              <button className="fBtn" style={{ borderRadius: '70%' }} onClick={() => handleDelete(blog.id)}>
                <img src={remove} alt="delete" />
              </button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Lists