import React, { Component } from "react"
import { Link } from "react-router-dom"
import logo from "../logo.svg"
import styled from "styled-components"

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-3">
				{/* 
				https://www.iconfinder.com/icons/1243689/call_phone_icon
				Creative Commons (Attribution 3.0 Unported);
				https://www.iconfinder.com/Makoto_msk */}
				<Link to="/">
					<img src={logo} alt="store" className="navbar-brand" />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							products
						</Link>
					</li>
				</ul>

				<Link to="/cart" className="ml-auto">
					<ButtonContaier>
						<span className="mr-2">
							<i className="fas fa-cart-plus"></i> cart
						</span>
					</ButtonContaier>
				</Link>
			</nav>
		)
	}
}

const ButtonContaier = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--lightBlue);
	color: var(--lightBlue);
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: .2rem .5rem .2rem 0;
	transition;all .5s ease-in-out;

	&:hover {
		background:var(--lightBlue);
		color:var(--mainBlue);
	}

	&:focus {
		outline:none;
	}

`

export default NavBar
