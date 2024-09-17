import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../../constant'
import { toast } from 'react-toastify'
import ProductForm from './ProductForm'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

    let params = useParams()
    let id = params.id
    let navigate = useNavigate()


    const getData = async () => {
        let result = await axios({
          url: `${url}/product/${id}`,
          method: "get",
        })
        let data = result.data.result
        setName(data.name)
        setPrice(data.price)
        setQuantity(data.quantity)
        setDescription(data.description)
        setCategory(data.category)
      }
      useEffect(() => {
        getData()
      }, [])


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
                url : `${url}/product/${id}`,
                method : "patch",
                data : data
            })

            navigate(`/product/${id}`)

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
          buttonName="Update"
          ></ProductForm>
    </div>
  )
}

export default UpdateProduct
