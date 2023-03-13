import React from 'react'
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
            navigate('/stories')
        })
    }

    return (
        <div className="container-fluid">
            <main className="wrapper" >
                {isPending && <div style={{textAlign: 'center', paddingTop: 400, fontSize: 32}}>Loading...</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article style={{paddingTop: 100, display: 'flex', flexDirection: 'column'}}>
                        <h2 style={{textAlign: 'center', color: '#D4A017'}}>{blog.title}</h2>
                        <p style={{textAlign: 'center'}}> Written by {blog.author}</p>
                        <div className="blog-content">{blog.body}</div>
                        <button onClick = {handleClick} style={{textAlign: 'center', justifySelf: 'center'}}>Remove</button>
                    </article>
                )}
            </main>
        </div>

    )
}

export default BlogDetail