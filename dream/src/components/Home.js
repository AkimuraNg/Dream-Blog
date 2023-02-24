import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import feats from './data/feats.json'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="container-fluid">

      <Navbar/>
      
      <main className="wrapper" >

        {/* Intro view */}
        <section style={{ paddingTop: 80, textAlign: 'center' }} className="introSection">
          <div className="row">
            <div className="content">
              <h1>Craft your stories from dreams</h1>
              <h5>Dream Blogs encourage your imagination, your dream and help you compose your own stories.</h5>
            </div>
          </div>
          <img className="coverImage" src="https://images.ctfassets.net/cnu0m8re1exe/2oqTSOy7fSYIQwxnHWs2SJ/a248fbc8289b460bf564f0f6b3bb8859/shutterstock_1842970219.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" alt="Cover" />
        </section>

        {/* About view */}
        {/* <section style={{ textAlign: 'left' }} id="scrollspyAbout" className="aboutSection">

          <h1 style={{ paddingBottom: 20 }}>About the Website</h1>

          <div className="content">
            <div>
              <h4 style={{ paddingBottom: 28 }}>Have you ever dream about something very good, very fantastic, very nostalgic,...?
                <br />Have you ever want to share your dreams to everyone but to shy to share with them?
                <br /> Then this website is for you! </h4>
              <p>Introducing 'Dream blog'. A webpage where you can share you dream with others without having to revealing yourself.
              </p>
            </div>
            <img className="coverImage" src="https://images.ctfassets.net/cnu0m8re1exe/61ygSbULPkXT6xR4zHmHc5/94c9a30f1ba6cd05edef3c953947d9a0/dreamstate.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" alt="cover2" />
          </div>

        </section> */}

        {/* Features view */}
        <section style={{ textAlign: 'right' }}  className="featuresSection" >
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

          <Link to="/blog" className="link" style={{
            color: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '28px',
            textDecoration: 'none',
            paddingTop: 30,
            paddingBottom: 40
          }}> Join us in the magical journey. View Stories</Link>

        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Home