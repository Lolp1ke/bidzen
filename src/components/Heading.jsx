import React from "react";

function Heading(title, description) {
	return (
		<article className="heading">
			<h2 className="heading__title title">{title}</h2>
			<p className="heading__description text">{description}</p>
		</article>
	);
}

export default Heading;
