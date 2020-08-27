import React from "react"

const CartItem = ({ item, value }) => {
	const { id, title, img, price, total, count } = item
	const { increment, decrement, removeItem } = value

	return (
		<div className="row my-5 text-capitalize text-center">
			{/* column one  */}
			<div className="col-10 mx-auto col-lg-2">
				<img
					src={img}
					style={{ width: "5rem", heigth: "5rem" }}
					className="img-fluid"
					alt=""
				/>
			</div>

			{/* column two  */}
			<div className="col-10 mx-auto col-lg-2 ">
				<span className="d-lg-none">product :</span> {title}
			</div>
			<div className="col-10 mx-auto col-lg-2 ">
				<strong>
					<span className="d-lg-none">price :</span> Kshs {price * 1000}
				</strong>
			</div>
			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
				<div className="d-flex justify-content-center">
					<div>
						<span
							className="btn btn-black mx-1"
							onClick={() => {
								return decrement(id)
							}}
						>
							-
						</span>
						<span className="btn btn-black mx-1">{count}</span>
						<span
							className="btn btn-black mx-1"
							onClick={() => {
								return increment(id)
							}}
						>
							+
						</span>
					</div>
				</div>
			</div>

			{/* remove item  */}
			<div className="col-10 mx-auto col-lg-2 ">
				<div className=" cart-icon" onClick={() => removeItem(id)}>
					<i className="fas fa-trash" />
				</div>
			</div>

			<div className="col-10 mx-auto col-lg-2 ">
				<strong>item total : Kshs {total * 1000} </strong>
			</div>
		</div>
	)
}

export default CartItem
