import Modal from "react-modal";
import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Scrollbar from "react-custom-scrollbars-2";
import './AboutUs.css'
const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(true)
    const Navigate = useNavigate()
    function onClose() {
        setIsOpen(false)
        Navigate("/")
    }
    return (
        <Scrollbar>
            <div className="container   m-4  ">

                <Modal isOpen={isOpen}
className="modal-xl-3"
                >

                    <div className='container'>


                        <div className='row'>

                            <div className='col-12 col-md- col-sm-6 modal-xl-1'>

                                <NavLink to="/about">  <img src="./Images/EiegthCimg.jpg" className="w-100 rounded hover--image img-fluid"></img>
                                </NavLink>
                            </div>
                            <div className='text-center  col-12 col-md-5 col-sm-6  modal-xl-2 text--shadow'>

                                <h2 className=" "> surendra patidar </h2>
                                <u></u>

                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore minima laudantium veritatis. Doloribus est id ut blanditiis illo ex aspernatur.</p>


                            </div>
                        </div>
                    </div>
                    <div className="text-center m-4">
                        <button className="btn btn-outline-primary rounded-pill w-25 py-3    text-center" onClick={onClose}>close</button>
                    </div>

                </Modal>
            </div>
        </Scrollbar>
    )
}

export default AboutUs