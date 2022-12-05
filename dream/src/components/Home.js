import React from 'react'
import feats from './data/feats.json'

const Home = () => {
  return (
    <div >
      <main className="wrapper" >

        {/* Intro view */}
        <section style={{ paddingTop: 80, textAlign: 'center' }} id="scrollspyHome" className="introSection" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="-1">
          <h1>Dream Blog</h1>
          <p>Paragraph will be added later. An image will be used as a thumbnail.</p>
        </section>

        {/* About view */}
        <section style={{ paddingTop: 120, padding: 80, textAlign: 'left' }} id="scrollspyAbout" className="aboutSection" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="-1">
          <h1>About the Website</h1>
          <h4>Have you ever dream about something very good, very fantastic, very nostalgic,...?
            <br />Have you ever want to share your dreams to everyone but to shy to share with them?
            <br /> Then this website is for you! </h4>
          <p>Introducing 'Dream blog'. A webpage where you can share you dream with others without having to revealing yourself. Here, on this website, everyone is anonymous and the only thing that is shown is their dream stories.
            You have a good dream last night? Share it on here! You have a scary nightmare? Share it on here as well! We accept all kind of dreams and nightmares that you experienced.
          </p>
        </section>

        {/* Features view */}
        <section style={{ paddingTop: 120, textAlign: 'center' }} id="scrollspyFeats" className="featuresSection" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="-1">
          <h1>Website Features</h1>
          <h4>Here are some features that we have at the moment</h4>
          {/* Card views */}
          <div className="featItems" style={{ padding: 80 }}>
            {feats.map(post => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <img src={post.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home