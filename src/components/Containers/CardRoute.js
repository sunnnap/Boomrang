



import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Card from '../Cards/Card';
import Branding from '../Cards/Branding';
import Digital from '../Cards/Digital';
import Packaging from '../Cards/Packaging';
import './Cardrrouter.css'

const CardRoute = () => {
    return (
        <>
            <div className='container'>
                <div>
                    <div className='text-center'>
                        <span className='m-2 routerlink'> <Link to="allCard" className='routerlink'>all</Link>|</span>
                        <span className='m-2'> <Link to="branding" className='routerlink'>branding</Link></span>
                        <span className='m-2'><Link to="digital" className='routerlink'>digital</Link></span>
                        <span className='m-2'><Link to="packaging" className='routerlink'>packaging</Link>
                        </span>
                    </div>
                    <Routes>
                        <Route path="/allCard" element={<Card></Card>}></Route>

                        <Route path="/branding" element={<Branding></Branding>}></Route>
                        <Route path="/digital" element={<Digital></Digital>}> </Route>
                        <Route path="/packaging" element={<Packaging></Packaging>}> </Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default CardRoute