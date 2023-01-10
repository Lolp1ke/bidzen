import React from "react";

import "../assets/styles/heading.css";

function Heading(title, description, button, btnText, btnImg) {
	return (
		<section className="heading">
			<article className="heading__article">
				<h2 className="heading__title title">{title}</h2>
				<p className="heading__description text">{description}</p>
			</article>
			<a
				href="#"
				className="heading__button"
				style={{ display: button === true ? "flex" : "none" }}
			>
				<img
					src={process.env.PUBLIC_URL + btnImg}
					alt="button"
					className="heading__btn-image"
				/>
				<p className="heading__button-text">{btnText}</p>
			</a>
		</section>
	);
}

export default Heading;
