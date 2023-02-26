import React, { useCallback, useEffect, useState } from 'react'


import './Card.css';
import Button from './Buttons';
import Card from './Card';
import Menu from '../Apifile/DummyApi';
const allCategories = ['All', ...new Set(Menu.map(item => item.category))];
console.log(allCategories, 'v');
const Demo = () => {
    const [demo, setDemo] = useState(Menu)

    // const[demo ,setDemo]=useState([])

    //    useEffect(()=>{
    //     fetch("http://fakestoreapi.com/products/category/electronics")
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         setDemo(data)
    //         console.log(data)
    //     })
    //    },[])

    const [buttons, setButtons] = useState(allCategories);
    console.log("changecard ")
    const filter = (button) => {

        if (button === 'All') {
            setDemo(Menu);
            return;
        }
        const filteredData = Menu.filter(item => item.category === button);
        setDemo(filteredData)
    }



    return (
        <div>

            <Button button={buttons} filter={filter} />
            <Card demo={demo} />



        </div>
    )
}

export default Demo
