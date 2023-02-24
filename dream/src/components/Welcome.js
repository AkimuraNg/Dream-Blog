import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <main className='wrapper'>
        Welcome
        <Link className="btn btn-danger" to="/home">Getting started</Link>
    </main>
  )
}

export default Welcome