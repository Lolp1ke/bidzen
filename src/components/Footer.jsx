import React from "react";

import "../assets/styles/footer.css";
import Newsletter from "./Newsletter";

function Footer() {
	return (
		<footer className="footer">
			<Newsletter />
			<img
				src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
				alt="logo"
				className="footer__logo"
			/>
			<p className="footer__text">
				Sed ut perspiciatis unde omnis iste natus error sit voluptate
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
				quaes
			</p>
			<div className="footer__social">
				<a href="#" className="footer__social-link">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/facebook.svg"
						}
						alt="facebook"
						className="footer__social-icon"
					/>
				</a>
				<a href="#" className="footer__social-link">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/twitter.svg"
						}
						alt="twitter"
						className="footer__social-icon"
					/>
				</a>
				<a href="#" className="footer__social-link">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/linked.svg"
						}
						alt="linkedin"
						className="footer__social-icon"
					/>
				</a>
				<a href="#" className="footer__social-link">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/youtube.svg"
						}
						alt="youtube"
						className="footer__social-icon"
					/>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
