import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import plus from './images/plus-circle.svg'
import Lists from './data/Lists'
import Navbar from './Navbar'
import Footer from './Footer'
import useFetch from './useFetch'


const Blog = () => {

    const {data : blogs, isPending, error} = useFetch('http://localhost:3002/blogs')
    
    // const handleDelete = (id) =>{
    //     const newBlog = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlog);
    // }

    return (
        <div className="container-fluid">
            <Navbar />
            <main className="wrapper">
                <div className="Blog">
                    <section className="blogHead" style={{ textAlign: 'center' }}>
                        <h1>Blog Page</h1>
                        <p>Here you can view other stories and publish your own.</p>

                        <Link to="/create" className="btn btn-primary" style={{ borderRadius: "70%" }}>
                            <img src={plus} alt="plus" />
                        </Link>
                    </section>

                    <section className="blogItems">
                        {error && <h3>{error}</h3>}
                        {isPending && <h3>Loading...</h3>}
                        {blogs && <Lists blogs={blogs} />}
                        {/* handleDelete={handleDelete} */}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Blog