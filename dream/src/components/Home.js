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
          <img style={{width: "64%"}} className="coverImage" src="https://images.ctfassets.net/cnu0m8re1exe/2oqTSOy7fSYIQwxnHWs2SJ/a248fbc8289b460bf564f0f6b3bb8859/shutterstock_1842970219.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" alt="Cover" />
        </section>

        {/* About view */}
        <section style={{ paddingTop: 160, padding: 80, textAlign: 'left' }} id="scrollspyAbout" className="aboutSection" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="-1">
          
          <h1 style={{ paddingBottom: 20 }}>About the Website</h1>
          
          <div style={{ display: 'flex' }}>
            <div>
              <h4 style={{ paddingBottom: 28 }}>Have you ever dream about something very good, very fantastic, very nostalgic,...?
                <br />Have you ever want to share your dreams to everyone but to shy to share with them?
                <br /> Then this website is for you! </h4>
              <p>Introducing 'Dream blog'. A webpage where you can share you dream with others without having to revealing yourself.
                {/* <br/> Here, on this website, everyone is anonymous and the only thing that is shown is their dream stories.
                <br />You have a good dream last night? Share it on here!
                <br />You have a scary nightmare? Share it on here as well!
                <br />We accept all kind of dreams and nightmares that you experienced. */}
              </p>
            </div>
            <img className="coverImage" style={{paddingLeft: 100}}src="https://images.ctfassets.net/cnu0m8re1exe/61ygSbULPkXT6xR4zHmHc5/94c9a30f1ba6cd05edef3c953947d9a0/dreamstate.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" alt="cover2" />
          </div>

        </section>

        {/* Features view */}
        <section style={{ paddingTop: 160, textAlign: 'right' }} id="scrollspyFeats" className="featuresSection" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
          <h1 style={{ paddingRight: 40 }}>Website Features</h1>
          <h4 style={{ paddingRight: 40 }}>Here are some features that the website currently supports</h4>
          {/* Card views */}
          <div className="featItems" style={{ padding: 60 }}>
            {feats.map(post => {
              return (
                <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                  <img src={post.image} className="card-img" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: 'center', paddingBottom: 20 }}>{post.title}</h5>
                    <p className="card-text" >{post.content}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <Link to="/blog" style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '28px', textDecoration: 'none', marginBottom: 50 }}> View Stories</Link>

        </section>
      </main>
    </div>
  )
}

export default Home