import React from "react";
import { Container, Row, Col } from "reactstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import heroImg from "../../assets/images/hero-img01.png";
import heroImg02 from "../../assets/images/hero-img02.png";
import heroimg03 from "../../assets/images/hero-img03.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./events.css";

// import required modules
import { Pagination } from "swiper";

const Events = () => {
	return (
		<Container>
			<Row>
				<Col lg="2">
					<h2> NUESTRAS FIESTAS ESPECIALES </h2>
				</Col>
				<Col lg="10">
					<Swiper
						slidesPerView={3}
						spaceBetween={10}
						/* centeredSlides={true} */
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="mySwiper"
					>
						<SwiperSlide>
							<img src={heroImg} alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={heroImg02} alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={heroimg03} alt="" />
						</SwiperSlide>
						{/* <SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide> */}
					</Swiper>
				</Col>
			</Row>
		</Container>
	);
};

export default Events;
