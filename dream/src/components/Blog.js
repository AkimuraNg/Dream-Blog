import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import plus from './images/plus-circle.svg'
import Lists from './data/Lists'


const Blog = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: 'Blog 1', body: 'Lorem Ipsum...', author: 'anonymous', id: 1 },
    //     { title: 'Blog 2', body: 'Lorem Ipsum...', author: 'anonymous', id: 2 },
    //     { title: 'Blog 3', body: 'Lorem Ipsum...', author: 'anonymous', id: 3 }
    // ])
    const [blogs, setBlogs] = useState(null)

    // const handleDelete = (id) =>{
    //     const newBlog = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlog);
    // }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res =>{
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <div className="container-fluid">
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
                        {blogs && <Lists blogs={blogs} />} 
                        {/* handleDelete={handleDelete} */}
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Blog