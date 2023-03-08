import React from 'react'
import { Link } from 'react-router-dom'
import feats from '../data/feats.json'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  AOS.init()
  return (
    <div className="container-fluid">
      <main className="wrapper" >
        {/* Welcome section */}
        <section className="welcomeSection">
          <div data-aos="fade-up" data-aos-duration="2000">
            <h2 style={{ fontStyle: 'italic', color: '#D4A017', textTransform: 'uppercase' }} >"I dream of painting and then I paint my dream."</h2>
            <span style={{ fontStyle: 'italic' }}>Vincent Van Gogh</span>
            <h1 style={{ paddingTop: 100, color: '#D4A017' }}>Welcome to DREAM BLOGS</h1>
          </div>
          {/* <h2>Compose <span>your own</span> stories </h2> */}
        </section>

        {/* Intro view */}
        <section className="introSection" data-aos="fade-up" data-aos-duration="2000">
          <div className="row">
            <div className="col-5">
              <div className="content">
                <h1>Compose <span style={{ fontSize: 80, fontStyle: 'italic', color: '#D4A017' }}>YOUR OWN</span> stories</h1>
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
          <h1 className="featT" style={{ fontSize: 60 }}>Website Features</h1>
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
                <img className="coverImage" src="https://img.freepik.com/free-vector/flat-design-magical-dreams-illustration_23-2149668132.jpg?w=826&t=st=1678112238~exp=1678112838~hmac=5eeb632bc74723e34211e4df469747b32e14221087d13351a75cf70c96d8e3db" alt="..." />
              </div>
            </div>
          </div>
          {/* Card view responsive */}
          <div className="featuresRes">
            {feats.map(post => {
              return (
                <div className="card" style={{ backgroundColor: 'black', paddingTop: 60 }}>
                  <div className="card-title">
                    <img className="card-img" src={post.image} alt="..." />
                  </div>
                  <div className="card-content">
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
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
            paddingTop: 50,
            paddingBottom: 40
          }}> Join us in the magical journey</Link>

        </section>
      </main >
      <Footer />
    </div >
  )
}

export default Home