import React from 'react'
// import plus from './images/plus-circle.svg'

const Blog = () => {
    return (
        <div className="container-fluid">
            <main className="wrapper">
                <div className="Blog" style={{ display: 'flex', flexDirection: 'row' }}>
                    <section className="blogHead">
                        <div className="row">
                            <h1>Blog Page</h1>
                            <p>Here you can view other stories and publish your own.</p>
                        </div>
                    </section>
                    <section className="blogItems">
                        <div className="card">
                            <div className="card-body" style={{ textAlign: 'center' }}>
                                <h4 className="card-title"> Some title</h4>
                                <p className="card-text">Some paragraph</p>
                            </div>
                            {/* <button className="btn" style={{ width: '40%', alignSelf: 'center' }}>Read More</button> */}
                        </div>

                        <div className="card">
                            <div className="card-body" style={{ textAlign: 'center' }}>
                                <h4 className="card-title"> Some title</h4>
                                <p className="card-text">Some paragraph</p>
                            </div>
                            {/* <button className="btn" style={{ width: '40%', alignSelf: 'center' }}>Read More</button> */}
                        </div>

                        <div className="card">
                            <div className="card-body" style={{ textAlign: 'center' }}>
                                <h4 className="card-title"> Some title</h4>
                                <p className="card-text">Some paragraph</p>
                            </div>
                            {/* <button className="btn" style={{ width: '40%', alignSelf: 'center' }}>Read More</button> */}
                        </div>

                    </section>
                </div>

                {/* <button style={{borderRadius: "70%"}}>
                    <img src={plus} alt="plus"/>
               </button> */}
            </main>
        </div>
    )
}

export default Blog