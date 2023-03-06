import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import feats from '../data/feats.json'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  AOS.init()
  return (
    <div className="container-fluid">

      <Navbar />

      <main className="wrapper" >
        {/* Welcome section */}
        <section className="welcomeSection">
          <h1>Dream Blogs</h1>
          {/* <h2>Compose <span>your own</span> stories </h2> */}
        </section>

        {/* Intro view */}
        <section className="introSection" data-aos="fade-up" data-aos-duration="2000">
          <div className="row">
            <div className="col-5">
              <div className="content">
                <h1>Compose <span> your own</span> stories</h1>
                <h5>Dream Blogs encourage your imagination, your dream, and your experiences. Allowing you to compose and share your own stories.</h5>
              </div>
            </div>
            <div className="col-7">
              <img className="coverImage" src="https://img.freepik.com/free-vector/flat-design-magical-dreams-illustration_23-2149668135.jpg?w=1380&t=st=1678111992~exp=1678112592~hmac=1efb10c8b75207377da81007ddc8dfba9ebd8afb6ced39388ae73dd0008ac834" alt="Cover" />
            </div>
          </div>
        </section>

        {/* Features view */}
        <section className="featuresSection" data-aos="fade-up" data-aos-duration="3000">
          <h1 className="featT">Website Features</h1>
          <h4 className="featT">Here are some features that the website currently supports</h4>
          {/* Card views */}
          <div className="features">
            <div className="row">
              <div className="col-6">
                {feats.map(post => {
                  return (
                    <div className="card" style={{ backgroundColor: 'black', paddingTop: 60 }}>
                      <div className="face face1">
                        <div className="card-title">
                          <img className="card-img" src={post.image} alt="..." />
                        </div>
                      </div>
                      <div className="face face2">
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="col-6">
                <img className="coverImage" src="https://img.freepik.com/free-vector/flat-design-magical-dreams-illustration_23-2149668132.jpg?w=826&t=st=1678112238~exp=1678112838~hmac=5eeb632bc74723e34211e4df469747b32e14221087d13351a75cf70c96d8e3db" alt="..."/>
              </div>
            </div>

          </div>

          <Link to="/blogs" className="link" style={{
            color: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '28px',
            textDecoration: 'none',
            paddingTop: 50,
            paddingBottom: 40
          }}> Join us in the magical journey. View Stories</Link>

        </section>
      </main >
      <Footer />
    </div >
  )
}

export default Home