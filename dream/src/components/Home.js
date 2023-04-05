import React from 'react'
import { Link } from 'react-router-dom'
import feats from '../data/feats.json'
import AOS from 'aos'
import 'aos/dist/aos.css'

import intro from './images/introcoverimg-bystoryset.png'
import feat from './images/featCover by storyset.png'
import about from './images/abtCover by storyset.png'

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
          <h1 className="aboutT"> --About the Website--</h1>
          <div className="row">
            <div className="col-6">
              <img className="coverImage" src={about} alt="..." />
            </div>
            <div className="col-6">
              <div className="aboutContent">
                <h2>Why Do We Dream?</h2>
                <p>Dream Blog is a story telling website. You can create your own stories base on your dreams.
                  <br />Your stories can based on dreaming experiences: was it a wonderful dream or a bad dream?
                  <br />Your stories can based on emotions you have when dreaming: was it joyful, delightful, etc.
                  <br/> Dreaming nuture your imagination and you can express them at Dream Blog.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* Features view */}
        <section className="featuresSection" data-aos="fade-up" data-aos-duration="3000">
          <h1 className="featT">--Website Features--</h1>
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
            <Link to="/stories" style={{
              color: '#D4A017',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '30px',
              textDecoration: 'none',
              paddingBottom: 40
            }}> The journey of dreams is waiting for you</Link>
          </div>

        </section>
      </main >
    </div >
  )
}

export default Home