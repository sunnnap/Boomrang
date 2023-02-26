import React, { useState } from 'react'
import './Footer.css';
import Peopleapi from '../components/Apifile/Peopleapi';
const Footer = () => {
    const [people ,setPeople]=useState(Peopleapi)
    console.log("hello people")
    return (
        <div className='bg-dark'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-3 col-sm-8 p-5'>
                        <div className='m-2'>
                            <p className='text-white font---style'>ABOUT US </p>
                            <p className=' first--content'>
                                Map where your photos were taken and discover local points of interest. Map where your photos.

                                <br></br>
                                <br></br>
                                Location: 12 London Avenue, Suite 18
                                E-mail: support@theme.com
                                Phone: 8 800 123 4567
                              
                            </p>
                            <div className='icon-style'>        
                                    <span className='bi bi-instagram m-2'></span>
                                    <span className='bi bi-twitter m-2'></span>
                                    <span className='bi bi-whatsapp m-2'></span>
                                                                
                            </div>                       
                        </div>
                    </div>
                    <div className='col-12 col-md-3  col-sm-8 p-5'>
                        <div className='m-2'>
                            <p className='text-white font---style'>RECENT POSTS</p>
                            <p className=' first--content' >
                                Map where your photos were taken and discover local points

                                <p>May 8, 2018</p>
                                <hr></hr>
                            </p>
                            <p className='first--content' >
                                Map where your photos were taken and discover local points

                                <p>May 8, 2018</p>
                                <hr></hr>
                            </p>
                            <p className='first--content' >
                                Map where your photos were taken and discover local points

                                <p>May 8, 2018</p>
                                <hr></hr>
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3  col-sm-8 p-5'>
                        <div className='m-2'>
                            <p className='text-white font---style'>TWITTER FEED</p>

                        </div>
                    </div>
                    <div className='col-12 col-md-3  col-sm-8 p-5'>
                        <div className='m-2'>
                            <p className='text-white font---style'>PORTFOLIO
                           </p> 
                           <div className='container d-flex'>
                           <div className='row'> 
                            {
                                people.map( (data)=>{
                                    return (
                                        <>
                                            <div className='col-4 col-md-4 col-sm-4 g-2'>
                                            <div>
                                                <img src={data.image} className="w-100 image--hover img-fluid h-auto"></img>
                                            </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            </div>
                           </div>              
                        </div>
                    </div>
                    <div className=' text-center text-white'>
                        <p className='first--content'>
                        <hr></hr>
                        © 2023 Boomerang, All Rights Reserved. Design with love by 2theme</p>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Footer