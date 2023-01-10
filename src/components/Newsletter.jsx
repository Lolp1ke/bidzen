import React from "react";

function Newsletter() {
	return (
		<aside className="news">
			<article className="news__article">
				<h2 className="news__title">Newsletters</h2>
				<p className="news__text">
					Most popular gaming digital nft marketplace
				</p>
			</article>
			<form className="news__form">
				<input
					type="email"
					placeholder="Your email"
					className="news__input"
				/>
				<button className="news__button">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/telegram.svg"
						}
						alt="telegram"
						className="news__button-icon"
					/>
					<p className="news__button-text">Browse More</p>
				</button>
			</form>
		</aside>
	);
}

export default Newsletter;
