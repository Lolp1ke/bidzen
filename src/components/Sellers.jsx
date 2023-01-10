import React from "react";

import "../assets/styles/sellers.css";

import Heading from "./Heading";

import sellersData from "../assets/data/sellers.json";

function Sellers() {
	return (
		<section className="sellers">
			{Heading(
				"Best Sellers",
				"Most popular gaming digital nft marketplace",
				true,
				"Explore More",
				"/assets/images/icons/telegram.svg"
			)}
			<div className="sellers__cards">
				{sellersData.map((seller, index) => {
					return (
						<div className="sellers__card" key={index}>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/images/sellers/" +
									(index + 1) +
									".png"
								}
								alt="Seller"
								className="sellers__seller-image"
							/>
							<h3 className="sellers__seller-name">
								{seller.name}
							</h3>
							<p className="sellers__seller-desc">Creator</p>
							<a href="#" className="sellers__seller-button">
								Follow
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Sellers;
