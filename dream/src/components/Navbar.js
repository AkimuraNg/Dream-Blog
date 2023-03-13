import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const changeBg = () =>{
        if(window.scrollY >= 50){
            setNav(true)
        }else{
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeBg)
    return (
        <div> {/* Navigation bar */}
            <nav className={nav ? "navbar navbar-expand-lg fixed-top bg-dark": "navbar navbar-expand-lg fixed-top"}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/stories">Stories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/create">Compose</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav></div>
    )
}

export default Navbar