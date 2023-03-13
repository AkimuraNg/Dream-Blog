import React from 'react'
import { Link } from 'react-router-dom'
import notfound from './images/Notfound.png'


const Notfound = () => {
    return (
        <div className='Not-found'>
            <main className="wrapper">
                <div style={{ paddingTop: 200, textAlign: 'center' }}>
                    <h1>Sorry!</h1>
                    <p>The page you are looking for is not available.</p>
                    {/*Image: https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=826&t=st=1678369473~exp=1678370073~hmac=40b5c73a3a23d9df6f5b52eb1ab767c714db23c758ddc9c28bc44de65b67912f */}
                    <img style={{ paddingTop: 20, paddingBottom: 20, width: '20%' }} src={notfound} alt="Sorry" />
                    <Link to='/' style={{
                        justifyContent: 'center',
                        fontSize: 20,
                        display: 'flex',
                        color: 'whitesmoke'
                    }}>
                        Return to homepage</Link>
                </div>
            </main>
        </div>
    )
}

export default Notfound