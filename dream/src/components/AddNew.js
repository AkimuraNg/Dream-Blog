import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const AddNew = () => {
  return (
    <div className="container-fluid">
      <Navbar/>
        <main className="wrapper">
            <h1 style={{paddingTop: 120, textAlign: 'center'}}>Create a new story</h1>
        </main>
        <Footer/>
    </div>
  )
}

export default AddNew