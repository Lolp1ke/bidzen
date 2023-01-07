import React from "react";

import "../assets/styles/header.css";

function Header() {
	return (
		<header className="header">
			<div className="header__left">
				<p className="header__text text">
					Email: hotline@gmail.com
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/mail.svg"
						}
						alt="mail"
					/>
				</p>
				<p className="header__text text">
					Phone: 8 800 555 35 35
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/call.svg"
						}
						alt="phone"
					/>
				</p>
			</div>
			<div className="header__right">
				<a href="#" className="header__link">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/inst.svg"
						}
						alt="instagram"
					/>
				</a>
				<a href="#" className="header__link">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/twitter.svg"
						}
						alt="twitter"
					/>
				</a>
				<a href="#" className="header__link">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/linked.svg"
						}
						alt="linkedin"
					/>
				</a>
			</div>
		</header>
	);
}

export default Header;
