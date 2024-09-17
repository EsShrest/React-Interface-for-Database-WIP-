import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../../constant'

const ReadSpecificProduct = () => {
  let params = useParams()
  let [data, setData] = useState({})
  let id = params.id

  const getData = async () => {
    let result = await axios({
      url: `${url}/product/${params.id}`,
      method: "get",
    })
    setData(result.data.result)
    
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <img src={data.productImage}
        alt='product image'
        style={{ width: '200px', height: '200px' }}
      >
      </img>
      <p>Product Name : {data.name}</p>
      <p>Product Price : {data.price}</p>
      <p>Product Quantity : {data.quantity}</p>
      <p>Product Category : {data.category}</p>
    </div>
  )
}

export default ReadSpecificProduct
