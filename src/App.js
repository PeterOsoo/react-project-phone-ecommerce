import React, { Component } from "react"

import logo from "./logo.svg"
import "./App.css"

import NavBar from "./components/NavBar"
import ProductList from "./components/ProductList"
import Details from "./components/Details"
import Cart from "./components/Cart"
import Default from "./components/Default"

class App extends Component {
	render() {
		return (
			<div>
				app
				<NavBar />
				<ProductList />
				<Details />
				<Cart />
				<Default />
			</div>
		)
	}
}

export default App
