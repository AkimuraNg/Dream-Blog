import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const AddNew = () => {

  const [title, setTitle]= useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Anonymous')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const blog={title, body, author}

    setIsPending(true)

    fetch('https://supreme-spangle-savory.glitch.me/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log('Added');
      setIsPending(false)
      navigate('/blogs')
    })
  }

  return (
    <div className="container-fluid">
      <main className="wrapper create">
        <h1>Create New Stories</h1>
        <form className="add-form" onSubmit={handleSubmit}>
          <label>Blog Title</label>
          <input type="text" required value={title} placeholder="Your Story Title" onChange={(e) => setTitle(e.target.value)}></input>

          <label>Blog Body</label>
          <textarea required value={body} placeholder="What is it that you are dreaming?"onChange={(e) => setBody(e.target.value)}></textarea>

          <label>Author</label>
          <span>You can use a nickname or keep it anonymous!</span>
              <input type="text" required value={author} placeholder="Anonymous" onChange={(e) => setAuthor(e.target.value)}></input>
          {!isPending && <button>Add Story</button>}
          { isPending && <button disable>Loading...</button>}
        </form>
      </main>
    </div>
  )
}

export default AddNew