import React from "react";
import "../styles/home.css";
import { Container, Row, Col, CardSubtitle } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "./../shared/subtitle";
/* import SearchBar from "./../shared/SearchBar"; */
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/Newsletter";

const Home = () => {
	return (
		<>
			{/* ========== HERO SECTION ========== */}
			<section>
				<Container>
					<Row>
						<Col lg="6">
							<div className="hero__content">
								<div className="hero__subtitle d-flex align-items-center">
									<Subtitle subtitle={"San Pedro de Colalao"} />
									<img src={worldImg} alt="" />
								</div>
								<h1>
									Viajar abre la puerta a crear{" "}
									<span className="hightlight"> recuerdos</span>
								</h1>
								<p>
									San Pedro de Colalao, villa veraniega por excelencia, está
									enmarcada por los ríos Tipas y Tacanas y cuenta con
									innumerables atractivos para esperar al turista.
								</p>
							</div>
						</Col>

						<Col lg="2">
							<div className="hero__img-box">
								<img src={heroImg} alt="" />
							</div>
						</Col>
						<Col lg="2">
							<div className="hero__img-box hero__video-box mt-4">
								<video src={heroVideo} alt="" controls />
							</div>
						</Col>
						<Col lg="2">
							<div className="hero__img-box mt-5">
								<img src={heroImg02} alt="" />
							</div>
						</Col>

						{/* <SearchBar /> */}
					</Row>
				</Container>
			</section>
			{/* ============================================================== */}

			{/* ==================== HERO SECTION START ====================== */}
			<section>
				<Container>
					<Row>
						<Col lg="3">
							<h5 className="services__subtitle">lo que servimos</h5>
							<h2 className="services__title">
								Ofrecemos nuestros mejores servicios
							</h2>
						</Col>
						<ServiceList />
					</Row>
				</Container>
			</section>

			{/* ========== FEATURED TOUR SECTION START ========== */}
			<section>
				<Container>
					<Row>
						<Col lg="12" className="mb-5">
							<Subtitle subtitle={"Explorar"} />
							<h2 className="featured__tour-title">
								Nuestros tours destacados
							</h2>
						</Col>
						<FeaturedTourList />
					</Row>
				</Container>
			</section>
			{/* ========== FEATURED TOUR SECTION END =========== */}

			{/* ========== EXPERIENCE SECTION START ============ */}
			<section>
				<Container>
					<Row>
						<Col lg="6">
							<div className="experience__content">
								<Subtitle subtitle={"Experiencia"} />
								<h2>
									Con toda nuestra experiencia <br /> Nosotros te serviremos
								</h2>
								<p>
									Es posible encontrar yacimientos arqueológicos
									correspondientes a la cultura Ayampitin, Ampajango y
									Candelaria en todas sus etapas temprana, media y tardía.
									<br /> Descubrí los imperdibles de este destino{" "}
								</p>
							</div>

							<div className="counter__wrapper d-flex align-items-center gap-5">
								<div className="counter__box">
									<span>12k+</span>
									<h6>Viaje exitoso</h6>
								</div>
								<div className="counter__box">
									<span>2k+</span>
									<h6>Clientes regulares</h6>
								</div>
								<div className="counter__box">
									<span>15</span>
									<h6>año de experiencia</h6>
								</div>
							</div>
						</Col>
						<Col lg="6">
							<div className="experience__img">
								<img src={experienceImg} alt="" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* ========== EXPERIENCE SECTION END ============== */}

			{/* ========== GALLERY SECTION START ============== */}
			<section>
				<Container>
					<Row>
						<Col lg="12">
							<Subtitle subtitle={"Galería"} />
							<h2 className="gallery__title">
								Visite la galería de tours de nuestros clientes
							</h2>
						</Col>
						<Col lg="12">
							<MasonryImagesGallery />
						</Col>
					</Row>
				</Container>
			</section>
			{/* ========== GALLERY SECTION END ================ */}

			{/* ========== TESTIMONIAL SECTION START ================ */}
			<section>
				<Container>
					<Row>
						<Col lg="12">
							<Subtitle subtitle={"A los fanáticos les encanta"} />
							<h2 className="testimonial__title">
								Lo que nuestros fans dicen de nosotros
							</h2>
						</Col>
						<Col lg="12">
							<Testimonials />
						</Col>
					</Row>
				</Container>
			</section>
			{/* ========== TESTIMONIAL SECTION END ================== */}
			<NewsLetter />
		</>
	);
};

export default Home;
