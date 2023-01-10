import React from "react";

import "../assets/styles/categories.css";

import Heading from "./Heading";

import categoryData from "../assets/data/category.json";

function Categories() {
	return (
		<section className="categories">
			<div className="categories__container">
				{Heading(
					"Popular Categories",
					"Most popular gaming digital nft marketplace",
					true,
					"Explore more",
					"/assets/images/icons/telegram.svg"
				)}
				<div className="categories__content">
					{categoryData.map((catalog, index) => {
						return (
							<div className="categories__item" key={index}>
								<img
									className="categories__image"
									src={
										process.env.PUBLIC_URL +
										"/assets/images/categories/categories" +
										(index + 1) +
										".png"
									}
									alt={catalog.title}
								/>
								<article className="categories__article">
									<h3 className="categories__name">
										{catalog.title}
									</h3>
									<p className="categories__desc">
										{catalog.description}
									</p>
								</article>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Categories;
