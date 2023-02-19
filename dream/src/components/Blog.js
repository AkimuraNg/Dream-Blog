import React from 'react'
import { Link } from 'react-router-dom'
import plus from './images/plus-circle.svg'
import { useState } from 'react'
import Lists from './data/Lists'


const Blog = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Blog 1', body: 'Lorem Ipsum...', author: 'anonymous', id: 1 },
        { title: 'Blog 2', body: 'Lorem Ipsum...', author: 'anonymous', id: 2 },
        { title: 'Blog 3', body: 'Lorem Ipsum...', author: 'anonymous', id: 3 }
    ])

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
                        <Lists blogs={blogs}/>
                    </section>
                    {/* <section className="blogItems">
                        <div className="card">
                            <div className="card-body" style={{ textAlign: 'center' }}>
                                <h4 className="card-title"> Some title</h4>
                                <p className="card-text">Some paragraph</p>
                            </div>
                            <button className="btn" style={{ width: '40%', alignSelf: 'center' }}>Read More</button>
                        </div>

                        
                    </section> */}
                </div>

                {/* <button style={{borderRadius: "70%"}}>
                    <img src={plus} alt="plus"/>
               </button> */}
            </main>
        </div>
    )
}

export default Blog