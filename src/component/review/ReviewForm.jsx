import React, { useState } from 'react'

/*
{
    "product":"66781cd0528822ce86471460",
     "user":"66781dd3528822ce8647146e",
     "description":"this is"
}
 */

const ReviewForm = () => {

    let [product, setProduct] = useState("")
    let [user, setUser] = useState("")
    let [description, setDescription] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            product,
            user,
            description,
        }
        console.log(data)
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <fieldset>
                <div>
                      <label htmlFor="product">Product : </label>
                      <input type="text"
                          id="product"
                          value={product}
                          onChange={(e) => {
                              setProduct(e.target.value)
                          }}
                      ></input>
                  </div>
                <div>
                      <label htmlFor="user">User : </label>
                      <input type="text"
                          id="user"
                          value={user}
                          onChange={(e) => {
                              setUser(e.target.value)
                          }}
                      ></input>
                  </div>
                <div>
                      <label htmlFor="description">Description : </label>
                      <input type="text"
                          id="description"
                          value={description}
                          onChange={(e) => {
                              setDescription(e.target.value)
                          }}
                      ></input>
                  </div>
              </fieldset>
              <button type="submit">Send</button>
          </form>
    </div>
  )
}

export default ReviewForm