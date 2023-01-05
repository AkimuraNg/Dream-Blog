import React from 'react'
import { Link } from 'react-router-dom'
import feats from './data/feats.json'

const Home = () => {
  return (
    <div className="container-fluid">
      <main className="wrapper" >

        {/* Intro view */}
        <section style={{ paddingTop: 80, textAlign: 'center' }} id="scrollspyHome" className="introSection" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="-1">
          <h1>Your stories are made from dreams</h1>
          <p>Paragraph will be added later. An image will be used as a thumbnail.</p>
        </section>

        {/* About view */}
        <section style={{ paddingTop: 120, padding: 80, textAlign: 'left' }} id="scrollspyAbout" className="aboutSection" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="-1">
          <h1 style={{paddingBottom: 20}}>About the Website</h1>
          <h4 style={{ paddingBottom: 28}}>Have you ever dream about something very good, very fantastic, very nostalgic,...?
            <br />Have you ever want to share your dreams to everyone but to shy to share with them?
            <br /> Then this website is for you! </h4>
          <p>Introducing 'Dream blog'. A webpage where you can share you dream with others without having to revealing yourself.
            Here, on this website, everyone is anonymous and the only thing that is shown is their dream stories.
            <br />You have a good dream last night? Share it on here!
            <br />You have a scary nightmare? Share it on here as well!
            <br />We accept all kind of dreams and nightmares that you experienced.
          </p>

        </section>

        {/* Features view */}
        <section style={{ paddingTop: 120, textAlign: 'right'}} id="scrollspyFeats" className="featuresSection" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
          <h1 style={{ paddingRight: 40 }}>Website Features</h1>
          <h4 style={{ paddingRight: 40 }}>Here are some features that the website currently supports</h4>
          {/* Card views */}
          <div className="featItems" style={{ padding: 60 }}>
            {feats.map(post => {
              return (
                <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                  <img src={post.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: 'center', paddingBottom: 20 }}>{post.title}</h5>
                    <p className="card-text" >{post.content}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <Link to="/blog" style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '28px', textDecoration: 'none', marginBottom: 50}}> View Stories</Link>

        </section>
      </main>
    </div>
  )
}

export default Home