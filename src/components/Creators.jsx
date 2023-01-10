import React from "react";

import "../assets/styles/creators.css";

import Heading from "./Heading";
import CreatorsCard from "./CreatorsCard";
import CreatorsCardBig from "./CreatorsCardBig";

function Creators() {
	return (
		<section className="creators">
			{Heading(
				"Our Creators",
				"Most popular gaming digital nft marketplace",
				false,
				"",
				""
			)}
			<div className="creators__cards">
				{CreatorsCard(
					"/assets/images/creators/nft/nft1.png",
					"‘‘3D Space Rocket With Smoke Premium’’",
					"Daniel M. Bivens",
					"/assets/images/creators/creator.png"
				)}
				{CreatorsCardBig(
					{
						nftImg1: "/assets/images/creators/nft/nft4.png",
						nftImg2: "/assets/images/creators/nft/nft5.png",
						nftImg3: "/assets/images/creators/nft/nft6.png",
						nftImg4: "/assets/images/creators/nft/nft7.png",
					},
					"‘‘Multi-purpose 3D Space Rocket With Animate Real Special Smoke Premium Quality Gaming’’",
					"Daniel M. Bivens",
					"/assets/images/creators/creator.png"
				)}
				{CreatorsCard(
					"/assets/images/creators/nft/nft2.png",
					"‘‘3D Space Rocket With Smoke Premium’’",
					"Daniel M. Bivens",
					"/assets/images/creators/creator.png"
				)}
				{CreatorsCard(
					"/assets/images/creators/nft/nft3.png",
					"‘‘3D Space Rocket With Smoke Premium’’",
					"Daniel M. Bivens",
					"/assets/images/creators/creator.png"
				)}
			</div>
		</section>
	);
}

export default Creators;
