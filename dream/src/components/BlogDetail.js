import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetail = () => {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:3002/blogs/' + id)

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
                    </article>
                )}
            </main>
            <Footer />
        </div>

    )
}

export default BlogDetail