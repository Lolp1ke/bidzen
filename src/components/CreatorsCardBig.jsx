import React from "react";

function CreatorsCardBig(
	{ nftImg1, nftImg2, nftImg3, nftImg4 },
	nftDesc,
	creatorName,
	creatorImg
) {
	return (
		<div className="creators__card">
			<div className="creators__imgs">
				<img
					src={process.env.PUBLIC_URL + nftImg1}
					alt="NFT example"
					className="creators__img"
				/>
				<img
					src={process.env.PUBLIC_URL + nftImg2}
					alt="NFT example"
					className="creators__img"
				/>
				<img
					src={process.env.PUBLIC_URL + nftImg3}
					alt="NFT example"
					className="creators__img"
				/>
				<img
					src={process.env.PUBLIC_URL + nftImg4}
					alt="NFT example"
					className="creators__img"
				/>
			</div>
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

export default CreatorsCardBig;
