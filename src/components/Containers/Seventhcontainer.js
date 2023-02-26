import React from 'react'
// import Seventgnature2 from './Image/SeventhNature2.jpg'
import Seventgnature from './Image/SeventhNature.jpg'
// import Seventgnature3 from './Image/Seventhnature3.jpg'
import './Seventh.css'
const Seventhcontainer = () => {
  return (
     <>
        <div className='container-fluid'>
            <div className='row'>
            <div className='text-center p-5 m-4'>
            <h1>Latest articles.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ratione, praesentium.</p>
            </div>
                <div className='col-12 col-md-4 col-sm-6'>
                    <div className='icons'>
                        <img src={Seventgnature} className="w-100  rounded"></img>
                    </div>
                    <div className='text-center p-4'>
                    <h4>surendra patidar</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore minima laudantium veritatis. Doloribus est id ut blanditiis illo ex aspernatur.</p>
                        <a href='#' className='text-decoration-none'>read more</a>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-sm-6'>
                    <div className='icons'>
                        <img src={Seventgnature} className="w-100  rounded"></img>
                    </div>
                    <div className='text-center p-4'>
                    <h4>surendra patidar</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore minima laudantium veritatis. Doloribus est id ut blanditiis illo ex aspernatur.</p>
                        <a href='#' className='text-decoration-none'>read more</a>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-sm-6'>
                    <div className='icons'>
                        <img src={Seventgnature} className="w-100 rounded"></img>
                    </div>
                    <div className='text-center p-4'>
                    <h4>surendra patidar</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore minima laudantium veritatis. Doloribus est id ut blanditiis illo ex aspernatur.</p>
                        <a href='#'  className='text-decoration-none'>read more</a>
                    </div>
                </div>
                
            </div>
        </div>
     </>
  )
}

export default Seventhcontainer