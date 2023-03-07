import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const AddNew = () => {

  const [title, setTitle]= useState('Hello Dreamers')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Anonymous')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const blog={title, body, author}

    setIsPending(true)

    fetch('http://localhost:3002/blogs', {
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
      <Navbar />
      <main className="wrapper create">
        <h1 style={{ paddingTop: 120, textAlign: 'center', color: 'black' }}>Create a new story</h1>
        <form className="add-form" onSubmit={handleSubmit}>
          <label>Blog Title</label>
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>

          <label>Blog Body</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

          <label>Author</label>
          <span>You can use a nickname or keep it anonymous!</span>
              <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}></input>
          {!isPending && <button>Add Story</button>}
          { isPending && <button disable>Loading...</button>}
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default AddNew