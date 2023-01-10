import React from "react";

import "../assets/styles/creators.css";

function CreatorsCard(nftImg, nftDesc, creatorName, creatorImg) {
	return (
		<div className="creators__card">
			<img
				src={process.env.PUBLIC_URL + nftImg}
				alt="NFT example"
				className="creators__img"
			/>
			<p className="creators__desc">{nftDesc}</p>
			<div className="creators__creator">
				<img
					src={process.env.PUBLIC_URL + creatorImg}
					alt="Creator"
					className="creators__creator-img"
				/>
				<article className="creators__creator-info">
					<h2 className="creators__creator-name">{creatorName}</h2>
					<p className="creators__creator-desc">Creator</p>
				</article>
			</div>
		</div>
	);
}

export default CreatorsCard;
