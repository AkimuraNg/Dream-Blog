import React from 'react'

const Home = () => {
  return (
    <div id="scrollspyHome" className="homePage" data-bs-spy="scroll" data-bs-target="#navbarContent" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="-1">
        <main className="wrapper" style={{paddingTop: 60}}>
            <section className="intro">
                <h1>Dream Blog</h1>
                <p>Paragraph will be added later</p>
            </section>
        </main>
    </div>
  )
}

export default Home