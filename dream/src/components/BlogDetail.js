import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetail = () => {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:3002/blogs/' + id)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:3002/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(() => {
            navigate('/blogs')
        })
    }

    return (
        <div className="container-fluid">
            <Navbar />
            <main className="wrapper" >
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article style={{paddingTop: 100}}>
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick = {handleClick}>Delete</button>
                    </article>
                )}
            </main>
            <Footer />
        </div>

    )
}

export default BlogDetail