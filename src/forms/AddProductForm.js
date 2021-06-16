import React, { useState } from 'react'

const AddProductForm = props => {
	const initialFormState = { id: null, title: '', price: '' }
	const [ product, setProduct ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!product.title || !product.price) return

				props.addProduct(product)
				setProduct(initialFormState)
			}}
		>
			<label>title</label>
			<input type="text" name="title" value={product.title} onChange={handleInputChange} />
			<label>price</label>
			<input type="number" name="price" value={product.price} onChange={handleInputChange} />
			<button>Add new product</button>
		</form>
	)
}

export default AddProductForm
