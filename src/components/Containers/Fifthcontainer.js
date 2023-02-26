import React, { useState } from 'react'
import Peopleapi from '../Apifile/Peopleapi'
import './Fifthcontainer.css';
const Fifthcontainer = () => {
    const [people, setPeople] = useState(Peopleapi)
    console.log("desing")
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='text-center m-4 p-4'>
                        <h1>Creative People.</h1>
                        <p>See how your users experience your website in realtime or view<br></br>
                            trends to see any changes in performance over time.</p>
                    </div>
                    {
                        people.map((people) => {
                            return (
                                <>
                                    <div className='col-12 col-md-4 col-sm-6 gy-4  '>
                                        <div className="  rounded">
                                            <img src={people.image} alt="Avatar" className="image w-100 img-fluid gy-3 rounded" />
                                            <div className="middle">
                                                <div className="text p-3">
                                                    <span className='bi bi-instagram'></span><br></br>
                                                    <span className='bi bi-twitter'></span><br></br>
                                                    <span className='bi bi-whatsapp'></span><br></br>
                                                </div>
                                                <div className='middle-bottom'>
                                                    <p>{people.name}</p>
                                                    <p>{people.title}</p>
                                                </div>
                                            </div>
                                            <div >
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='text-center m-4 p-4'>
                    <button className='btn btn-circle btn-outline-info rounded-pill px-4 py-3'>About us</button>
                </div>
            </div>
        </>
    )
}

export default Fifthcontainer