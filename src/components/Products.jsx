import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "../assets/styles/products.css";

import Heading from "./Heading";

function Products() {
	return (
		<section className="products">
			{Heading(
				"Best Products",
				"Most popular gaming digital nft market place",
				false,
				"",
				""
			)}
			<Swiper
				className="products__swiper"
				loop={true}
				slidesPerView={1}
				spaceBetween={30}
				breakpoints={{
					1400: {
						slidesPerView: 4,
					},
					1220: {
						slidesPerView: 3,
					},
					950: {
						slidesPerView: 2,
					},
					670: {
						slidesPerView: 1,
					},
				}}
				preloadImages={false}
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				modules={[Pagination, Autoplay]}
			>
				<SwiperSlide className="products__slide">
					<div className="products__container">
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/products/product1.jpg"
							}
							alt="product-1"
							className="products__img"
						/>
						<p className="products__name">
							‘’3D Space Rocket With Smoke Premium’’
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="products__slide">
					<div className="products__container">
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/products/product2.jpg"
							}
							alt="product-2"
							className="products__img"
						/>
						<p className="products__name">
							‘’3D Space Rocket With Smoke Premium’’
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="products__slide">
					<div className="products__container">
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/products/product3.jpg"
							}
							alt="product-3"
							className="products__img"
						/>
						<p className="products__name">
							‘’3D Space Rocket With Smoke Premium’’
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="products__slide">
					<div className="products__container">
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/products/product4.jpg"
							}
							alt="product-4"
							className="products__img"
						/>
						<p className="products__name">
							‘’3D Space Rocket With Smoke Premium’’
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Products;
