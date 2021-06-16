import React, { useState, Fragment } from 'react'
import AddProductForm from './forms/AddProductForm'
import EditProductForm from './forms/EditProductForm'
import ProductTable from './tables/ProductTable'

const App = () => {
	// Data
	const productsData = [
		{ id: 1, title: 'Orange', price: 30 },
		
		
	]

	const initialFormState = { id: null, title: '', price: '' }

	// Setting state
	const [ products, setProducts ] = useState(productsData)
	const [ currentProduct, setCurrentProduct ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addProduct = product => {
		product.id = products.length + 1
		setProducts([ ...products, product ])
	}

	const deleteProduct = id => {
		setEditing(false)

		setProducts(products.filter(product => product.id !== id))
	}

	const updateProduct = (id, updatedProduct) => {
		setEditing(false)

		setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
	}

	const editRow = product => {
		setEditing(true)

		setCurrentProduct({ id: product.id, title: product.title, price: product.price })
	}

	return (
		<div className="container">
			<h1>Admin Panel with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit product</h2>
							<EditProductForm
								editing={editing}
								setEditing={setEditing}
								currentProduct={currentProduct}
								updateProduct={updateProduct}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Product</h2>
							<AddProductForm addProduct={addProduct} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View products</h2>
					<ProductTable products={products} editRow={editRow} deleteProduct={deleteProduct} />
				</div>
			</div>
		</div>
	)
}

export default App
