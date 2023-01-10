import React from "react";

import "./assets/styles/default.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Creators from "./components/Creators";
import Sellers from "./components/Sellers";
import AllProducts from "./components/AllProducts";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<Navigation />
			<main>
				<Hero />
				<Products />
				<Creators />
				<Sellers />
				<AllProducts />
				<Categories />
			</main>
			<Footer />
		</>
	);
}

export default App;
