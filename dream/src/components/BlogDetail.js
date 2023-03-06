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
                    <article style={{paddingTop: 100, display: 'flex', flexDirection: 'column'}}>
                        <h2 style={{textAlign: 'center'}}>{blog.title}</h2>
                        {/* <img src="https://picsum.photos/350?grayscale" alt="..." style={{alignSelf:'center'}} /> */}
                        <p style={{textAlign: 'center'}}> Written by {blog.author}</p>
                        <div className="blog-content">{blog.body}</div>
                        <button onClick = {handleClick} style={{textAlign: 'center', justifySelf: 'center'}}>Delete</button>
                    </article>
                )}
            </main>
            <Footer />
        </div>

    )
}

export default BlogDetail