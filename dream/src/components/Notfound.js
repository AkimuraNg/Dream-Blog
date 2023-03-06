import React from 'react'
import { Link } from 'react-router-dom'


const Notfound = () => {
    return (
        <div className='Not-found'>
            <main className="wrapper">
                <div style={{ paddingTop: 200, textAlign: 'center' }}>
                    <h1>Sorry!</h1>
                    <p>The page you are looking for is not available.</p>
                    <img style={{ paddingTop: 20, paddingBottom: 20 }} src='https://www.psychologicalscience.org/redesign/wp-content/uploads/2016/05/PAFF_052416_SixElementsApology_Vectorguy_newsfeature1-300x250.jpg' alt="Sorry" />
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