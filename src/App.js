import React from "react";

import "./assets/styles/default.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
	return (
		<>
			<Header />
			<Navigation />
			<main>
				<Hero />
				<Products />
			</main>
		</>
	);
}

export default App;
