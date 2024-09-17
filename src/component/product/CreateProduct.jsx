import axios, { Axios } from 'axios'
import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../../constant';
import ProductForm from './ProductForm';




/*
{
    "name": "coconut biscuit",
    "price": 20,
    "quantity":12,
    "productImage":"....",
    "description":"taste like eating the coconut"
}
 */

const CreateProduct = () => {

    let [name, setName] = useState("")
    let [price,setPrice] = useState("")
    let [quantity,setQuantity] = useState("")
    let [productImage,setProductImage] = useState("")
    let [description,setDescription] = useState("")
    let [category,setCategory] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault();// to prevent default behavior (refresh)

        let data = {
            name,
            price,
            quantity,
            productImage,
            description,
            category
        }
        console.log(data)

        try {
            let result = await axios({
                url : `${url}/product`,
                method : "post",
                data : data
            })

            setName("")
            setPrice("")
            setQuantity("")
            setProductImage("")
            setDescription("")

            toast.success(result.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    
    }
  return (
      <div>
          <ProductForm 
          handleSubmit={handleSubmit}
          name={name}
          quantity={quantity}
          setName={setName}
          setQuantity={setQuantity}
          price={price}
          setPrice={setPrice}
          category={category}
          setCategory={setCategory}
          description={description}
          setDescription={setDescription}
          productImage={productImage}
          setProductImage={setProductImage}
          buttonName="Create"
          ></ProductForm>
    </div>
  )
}

export default CreateProduct