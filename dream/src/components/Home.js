import React from 'react'
import { Link } from 'react-router-dom'
import feats from '../data/feats.json'
import AOS from 'aos'
import 'aos/dist/aos.css'

import intro from './images/introcoverimg-bystoryset.png'
import feat from './images/featCover by storyset.png'
import about from './images/abtCover by storyset.png'
import illu from './images/Creative thinking - byStoryset.png'

const Home = () => {
  AOS.init()
  return (
    <div className="container-fluid">
      <main className="wrapper" >

        {/* Intro view */}
        <section className="introSection" data-aos="fade-up" data-aos-duration="2000">
          <div className="row">
            <div className="col-6">
              <div className="content">
                <h1>Dream Blogs</h1>
                <h2>Compose Your Own Stories</h2>
                <h5>Express your imagination, your dream, and your experiences.</h5>
              </div>
            </div>
            <div className="col-6">
              <img className="coverImage" src={intro} alt="Cover" />
            </div>
          </div>
        </section>

        {/* About view */}
        <section className="aboutSection" data-aos="fade-up" data-aos-duration="2500">
          <h1 className="aboutT"> About the Website</h1>
          <div className="about">
            <div className="row">
              <div className="col-6">
                <img className="coverImage" src={about} alt="..." />
              </div>
              <div className="col-6">
                <div className="aboutContent">
                  <div>
                    <h3>What is Dream Blog?</h3>
                    <p>
                      Dream Blog is a story telling website using dreams as the topic for all users.
                      <br />Here, you can compose your stories based on your dreams.
                      <br /> Nobody will knows who you are as long as you decide to remain anonymous.
                      <br /> You can freely write any stories that you want, expressing your experiences, your emotions, your imagination.
                      <br /> No matter how good or bad the story is, everything is allowed on Dream Blog, nobody can judge you for who you are.
                    </p>
                    <img className="illustration" src={illu} alt="..."/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features view */}
        <section className="featuresSection" data-aos="fade-up" data-aos-duration="3000">
          <h1 className="featT"> Website Features </h1>
          {/* Card views */}
          <div className="features">
            <div className="row">
              <div className="col-6 feats">
                {feats.map(post => {
                  return (
                    <div className="cardFeat">
                      <img src={post.image} alt="..." />
                      <div className="card-body">
                        <h5>{post.title}</h5>
                        <p>{post.content}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="col-6">
                <img className="coverImage" src={feat} alt="..." />
              </div>
            </div>
            <Link to="/blogs" style={{
              color: '#D4A017',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '30px',
              textDecoration: 'none',
              textAlign:'center',
              paddingBottom: 40
            }}> The journey of dreams is waiting for you</Link>
          </div>

        </section>
      </main >
    </div >
  )
}

export default Home