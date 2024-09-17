import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { url } from '../../constant'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const ProductDetails = ({ item,getData }) => {
    let navigate = useNavigate()
    const handleView = (id) => {
        return (e) => {
            navigate(`/product/${id}`)
        }
    }

    const handleUpdate = (id) => {
        return (e) => {
            navigate(`/product/update/${id}`)
        }
    }

    const handleDelete = (id) => {
        return (e) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
                try{
                    let result = axios({
                        url: `${url}/product/${id}`,
                        method: "delete"
                    })
                    getData()
    
                    toast.success(result.data.message)
                }
                catch(error){
                    // toast.error(error.response.data.message)
                }
              });
            
        }
    }
    
    return (
        <div
            style={{ border: "solid red 3px", marginBottom: "20px" }}>
            <img src={item.productImage}
                alt='product image'
                style={{ width: '200px', height: '200px' }}
            >
            </img>
            <p>Product Name : {item.name}</p>
            <p>Product Price : {item.price}</p>
            <p>Product Quantity : {item.quantity}</p>
            <p>Product Category : {item.category}</p>
            <button onClick={handleView(item._id)} style={{marginRight: "20px"}}>View</button>
            <button onClick={handleUpdate(item._id)} style={{marginRight: "20px"}}>Update</button>
            <button onClick={handleDelete(item._id)} style={{marginRight: "20px"}}>Delete</button>
        </div>
    )
}

export default ProductDetails
