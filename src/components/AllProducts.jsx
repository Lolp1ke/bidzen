import React from "react";

import "../assets/styles/products.css";

import Heading from "./Heading";

import allProductsData from "../assets/data/allProducts.json";

function AllProducts() {
	return (
		<section className="products2">
			{Heading(
				"All Products",
				"Most popular gaming digital nft marketplace",
				false,
				""
			)}
			<div className="products2__cards">
				{allProductsData.map((product, index) => {
					return (
						<div className="products2__card" key={index}>
							<img
								className="products2__image"
								src={
									process.env.PUBLIC_URL +
									"/assets/images/products/example" +
									(index + 1) +
									".png"
								}
								alt="NFT product example"
							/>
							<h3 className="products2__name">{product.name}</h3>
							<p className="products2__price">
								$ {product.price}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default AllProducts;
