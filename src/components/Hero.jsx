import React from "react";

import "../assets/styles/hero.css";

function Hero() {
	return (
		<section className="hero">
			<article className="hero__article">
				<h1 className="hero__title title">
					Discover and collect your favorite digital NFT
				</h1>
				<p className="hero__text text">
					Lorem ipsum dolor amet, consectetur adipiscing eiusmod
					tempor incididunt ut labore dolore magna aliqua
				</p>
				<div className="hero__buttons">
					<a href="#" className="hero___button">
						Explore More
					</a>
					<a href="#" className="hero___button">
						Create Now
					</a>
				</div>
			</article>
			<img
				src={process.env.PUBLIC_URL + "/assets/images/hero.png"}
				alt="NFT-example"
				className="hero__img"
			/>
		</section>
	);
}

export default Hero;
