import React from 'react'

const Home = () => {
  return (
    <div >
      <main className="wrapper" >

        {/* Intro view */}
        <section style={{ paddingTop: 100, textAlign: 'center' }} id="scrollspyHome" className="introSection" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="-1">
          <h1>Dream Blog</h1>
          <p>Paragraph will be added later</p>
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
          <div className="featItems" style={{padding: 80}}>
            <div className="card" style={{width: "18rem"}}>
              <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home