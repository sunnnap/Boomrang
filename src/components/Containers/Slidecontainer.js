import React from 'react'
import stickyimg from './Image/slideimage.jpg';
import men from './Image/slideimg1.jpg'
import girl from './Image/slideimg1.jpg'
import cutegirl from './Image/slideimg1.jpg'
import Sixthcontainer from './Sixthcontainer';
const Slidecontainer = () => {
   return (
      <>
         <div className= ''>
            <div className='row'>
               <div className='col-12'>
                  <div className='position-relative'>
                     <img src={stickyimg} className="w-100  " style={{opacity:"0.8",background:"rgba(34, 34, 34, .6)"}}></img>
                  
                  </div>
               </div>
             </div>
             <Sixthcontainer></Sixthcontainer>
         </div>
      </>
   )
}

export default Slidecontainer

     {/* <div style={{position:"absolute" ,top:"30rem" ,right:'30rem'}}>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                           <div className="carousel-inner text-center">
                              <div className="carousel-item active">
                                 <img src={men} className="d-block w-25 rounded-circle" alt="..." />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam.</p>
                              </div>
                              <div className="carousel-item">
                                 <img src={girl} className="d-block w-25 rounded-circle" alt="..." />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam.</p>                           
                              </div>
                              <div className="carousel-item">
                                 <img src={cutegirl} className="d-block w-25 rounded-circle" alt="..." />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam.</p>
                              </div>
                           </div>
                           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                           </button>
                           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                           </button>
                        </div>
                     </div>
*/}