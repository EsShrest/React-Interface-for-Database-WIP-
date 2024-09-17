import React, { useEffect, useState } from 'react'
import ProductDetails from './ProductDetails';
import axios from 'axios';
import { url } from '../../constant';

const ReadAllProduct = () => {
    let [products,setProducts] = useState([])

    /*
    Hit API on page load
    Ut gives dara
    Set data to products
    */

    const getData = async() => {
        try {
            let result = await axios({
                url: `${url}/product`,
                method: "get"
            })
            setProducts(result.data.result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
            {products.map((item, i) => {
                return (<ProductDetails item={item} key={item._id} getData={getData}></ProductDetails>)
            })}
        </div>
    )
}

export default ReadAllProduct
