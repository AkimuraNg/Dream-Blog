import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import feats from '../data/feats.json'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="container-fluid">

      <Navbar />

      <main className="wrapper" >

        {/* Intro view */}
        <section style={{ paddingTop: 80, textAlign: 'center' }} className="introSection">
          <div className="row">
            <div className="col-5">
              <div className="content">
                <h1>Compose <span> your own</span> stories</h1>
                <h5>Dream Blogs encourage your imagination, your dream and help you compose your own stories.</h5>
              </div>
            </div>
            <div className="col-7">
              <img className="coverImage" src="https://images.ctfassets.net/cnu0m8re1exe/2oqTSOy7fSYIQwxnHWs2SJ/a248fbc8289b460bf564f0f6b3bb8859/shutterstock_1842970219.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" alt="Cover" />
            </div>
          </div>
        </section>

        {/* Features view */}
        <section style={{ textAlign: 'right' }} className="featuresSection" >
          <h1 className="featT">Website Features</h1>
          <h4 className="featT">Here are some features that the website currently supports</h4>
          {/* Card views */}
          <div className="featItems">
            {feats.map(post => {
              return (
                <div className="card" style={{ width: "100%", textAlign: "center" }}>
                  <img src={post.image} className="card-img" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ textAlign: 'center' }}>{post.title}</h4>
                    <p className="card-text" >{post.content}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <Link to="/blogs" className="link" style={{
            color: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '28px',
            textDecoration: 'none',
            paddingTop: 30,
            paddingBottom: 40
          }}> Join us in the magical journey. View Stories</Link>

        </section>
      </main >
      <Footer />
    </div >
  )
}

export default Home