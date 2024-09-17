import React from 'react'

const ProductForm = ({ handleSubmit, name, setName, price, setPrice, setProductImage, productImage, quantity, setQuantity, description, setDescription, category, setCategory, buttonName }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="name">Name : </label>
                        <input type="text"
                            id="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="price">Price : </label>
                        <input type="number"
                            id="price"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity : </label>
                        <input type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(e.target.value)
                            }}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="productImage">Product Image : </label>
                        <input type="text"
                            id="productImage"
                            value={productImage}
                            onChange={(e) => {
                                setProductImage(e.target.value)
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
                    <div>
                        <label htmlFor="category">category : </label>
                        <input type="text"
                            id="category"
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                        ></input>
                    </div>
                </fieldset>
                <button type="submit">{buttonName}</button>
            </form>
        </div>
    )
}

export default ProductForm
