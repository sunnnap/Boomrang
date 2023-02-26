import React from 'react'
import iped from './Image/iped.png'
const Forthcontainer = () => {
    return (
        <div className='bg-light'>
            <div className='container-fluid'>
                <div className='row d-flex'>
                    <div className='col-lg-6'>
                        <img src={iped} className="w-100"></img>
                    </div>
                    <div className='col-lg-5'>
                        <div>
                            <h1>Flexible & Lightweight.</h1>
                            <p>Map where your photos were taken and discover
                                local points of interest. Map where your photos.
                                Map where your photos were taken and discover.

                            </p>
                        </div>
                        <div className='icons'>
                            <span className='bi bi-layout-split'> </span>
                        </div>
                        <h6>Visual Composer</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
                        </p>
                        <div className=''>
                            <div className='icons'>
                                <span className='bi bi-trophy'> </span>
                            </div>
                            <div>

                                <h6>Visual Composer</h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='icons'>
                                <span className='bi bi-link'> </span>
                            </div>
                            <div>

                                <h6>Visual Composer</h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Forthcontainer