import React from 'react'

const Blog = () => {
    return (
        <div className="container-fluid">
            <main className="wrapper">
               <section style={{paddingTop: 80, textAlign: 'center'}}>
                    <h1>Blog Page</h1>
                    <p>Here you can view other stories and publish your own.</p>
               </section>
               <section style={{display: 'flex'}}>
                    <div className="card" style={{width: '18rem'}}>

                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        
                    </div>
               </section>

               <button style={{borderRadius: "70%"}}>
                    Add New
               </button>
            </main>
        </div>
    )
}

export default Blog