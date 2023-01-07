import React, { useState } from "react";

import "../assets/styles/navigation.css";

function Navigation() {
	const [burgerState, setBurgerState] = useState("");
	const [navbarListState, setNavbarListState] = useState("");

	function burgerMenuOpen() {
		burgerState === ""
			? setBurgerState("active-burger")
			: setBurgerState("");
		navbarListState === ""
			? setNavbarListState("active-navbar-list")
			: setNavbarListState("");
	}

	return (
		<nav className="navbar">
			<div className="navbar__main">
				<img
					src={
						process.env.PUBLIC_URL + window.innerWidth > 500
							? "/assets/images/logo.png"
							: "/assets/images/logo-without-text.png"
					}
					alt="logo"
					className="navbar__logo"
				/>
				<div className="navbar__input">
					<input
						className="navbar__input-input-box"
						type="text"
						placeholder="Search..."
					/>
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/icons/search.svg"
						}
						alt="search"
					/>
				</div>
			</div>
			<nav className={"navbar__list " + navbarListState}>
				<ul className="navbar__body">
					<li className="navbar__item">
						<a href="#" className="navbar__link">
							Home
						</a>
					</li>
					<li className="navbar__item">
						<a href="#" className="navbar__link">
							Explore
						</a>
					</li>
					<li className="navbar__item">
						<a href="#" className="navbar__link">
							Community
						</a>
					</li>
					<li className="navbar__item">
						<a href="#" className="navbar__link">
							Pages
						</a>
					</li>
					<li className="navbar__item">
						<a href="#" className="navbar__link">
							Contact
						</a>
					</li>
				</ul>
			</nav>
			<a href="#" className="navbar__button">
				<p>Connect Wallet</p>
				<img
					src={
						process.env.PUBLIC_URL +
						"/assets/images/icons/wallet.svg"
					}
					alt="wallet"
				/>
			</a>
			<div
				className={"burger__button " + burgerState}
				onClick={burgerMenuOpen}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
}

export default Navigation;
