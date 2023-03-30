import React from 'react'
import Lists from '../data/Lists'
import useFetch from './useFetch'


const Blog = () => {

    const {data : blogs, isPending, error} = useFetch('https://supreme-spangle-savory.glitch.me/blogs')
    

    return (
        <div className="container-fluid">
            <main className="wrapper">
                <div className="Blog">
                    <section className="blogHead" style={{ textAlign: 'center' }}>
                        <h1>Stories Zone</h1>
                        <p>Here you can view other stories and publish your own.</p>
                    </section>

                    <section className="blogItems">
                        {error && <h3>{error}</h3>}
                        {isPending && <h3>Loading...</h3>}
                        {blogs && <Lists blogs={blogs} />}
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Blog