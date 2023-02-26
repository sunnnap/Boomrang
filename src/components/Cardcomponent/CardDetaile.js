import React, { useEffect, useState } from 'react'
import Menu from '../Apifile/DummyApi';
import { NavLink, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Scrollbar } from 'react-scrollbars-custom';
const CardDetaile = () => {
    const params = useParams()
    const [products, setproducts] = useState(Menu[params.id])

    console.log(products.id)
    // const [data ,setData]=useState([])
    //  useEffect(()=>{
    //  async function getData(){
    //     var res =await  axios.get(`http://fakestoreapi.com/products/${params.id}`)
    //     setData(res.data)
    //  }
    //  getData();

    // },[params])

    return (
        <>

            <div className='container-fluid m-2 p-2' >
                <h2>Product Detailes</h2>
                <div className="row">
                    {
                        <>
                            <div className="col-3">

                                <img src={products.imageUrl} height="200px" width="200px" />


                                <div>
                                    <NavLink to='/card'>back to product</NavLink>
                                </div>
                            </div>
                            <div className='row' style={{ overflow: "auto", width: "40rem", height: "16rem" }}>

                                <div className="col-3">
                                    <dl>
                                        <dt>title</dt>
                                        <dd>{products.title}</dd>
                                        <dt>price</dt>
                                        <dd>{products.price}</dd>
                                        <dt>rating</dt>
                                        <dd> <span className="bi bi-star-fill text-success"></span> {products.rating.rate}</dd>
                                    </dl>
                                </div>
                                <div className="col-9">
                                    <h4>Description</h4>
                                    <p className="w-50 text-justify">{products.description}</p>
                                </div>
                            </div>


                        </>
                    }

                </div>
            </div>

        </>
    )
}

export default CardDetaile



