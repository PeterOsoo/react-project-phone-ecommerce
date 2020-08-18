import React, { Component } from "react"
import Product from "./Product"
import Title from "./Title"
import { storeProducts } from "../data"
import { ProductConsumer } from "./Context"

class ProductList extends Component {
	state = {
		product: storeProducts,
	}
	render() {
		console.log(this.state.product)
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="products" />
						{/* products row  */}
						<div className="row">
							<ProductConsumer>
								{data => {
									return <h3>{data}</h3>
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
				{/* <Product /> */}
			</React.Fragment>
		)
	}
}

export default ProductList
