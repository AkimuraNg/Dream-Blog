import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div> {/* Navigation bar */}
            <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav justify-content-center mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/create">Create New</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav></div>
    )
}

export default Navbar