import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
	{
		path: "/home",
		display: "Inicio",
	},
	{
		path: "/about",
		display: "Nosotros",
	},
	{
		path: "/tours",
		display: "Lugares",
	},
];

const quick__links2 = [
	{
		path: "/gallery",
		display: "Galeria",
	},
	{
		path: "/login",
		display: "Iniciar",
	},
	{
		path: "/register",
		display: "Registrarse",
	},
];

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="3">
						<div className="logo">
							<img src={logo} alt="" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Commodi, enim.
							</p>
							<div className="social__link d-flex align-items-center gap-4">
								<span>
									<Link to="#">
										<i class="ri-youtube-line"></i>
									</Link>
								</span>
								<span>
									<Link to="#">
										<i class="ri-github-fill"></i>
									</Link>
								</span>
								<span>
									<Link to="#">
										<i class="ri-facebook-circle-line"></i>
									</Link>
								</span>
								<span>
									<Link to="#">
										<i class="ri-instagram-line"></i>
									</Link>
								</span>
							</div>
						</div>
					</Col>

					<Col lg="3">
						<h5 className="footer__link-title">Descubrir</h5>

						<ListGroup className="footer__quick-links">
							{quick__links.map((item, index) => (
								<ListGroupItem key={index} className="ps-0 border-0">
									<Link to={item.path}>{item.display}</Link>
								</ListGroupItem>
							))}
						</ListGroup>
					</Col>
					<Col lg="3">
						<h5 className="footer__link-title">enlaces rápidos</h5>

						<ListGroup className="footer__quick-links">
							{quick__links2.map((item, index) => (
								<ListGroupItem key={index} className="ps-0 border-0">
									<Link to={item.path}>{item.display}</Link>
								</ListGroupItem>
							))}
						</ListGroup>
					</Col>
					<Col lg="3">
						<h5 className="footer__link-title">Contacto</h5>

						<ListGroup className="footer__quick-links">
							<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
								<h6 className="mb-0 d-flex align-items-center gap-2">
									<span>
										<i class="ri-map-pin-line"></i>
									</span>
									Address:
								</h6>
								<p className="mb-0">San Pedro de Colalao</p>
							</ListGroupItem>

							<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
								<h6 className="mb-0 d-flex align-items-center gap-2">
									<span>
										<i class="ri-mail-line"></i>
									</span>
									Email:
								</h6>

								<p className="mb-0">dhannychocolateteamo@gmail.com</p>
							</ListGroupItem>

							<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
								<h6 className="mb-0 d-flex align-items-center gap-2">
									<span>
										<i class="ri-phone-fill"></i>
									</span>
									Phone:
								</h6>

								<p className="mb-0">+543814454199</p>
							</ListGroupItem>
						</ListGroup>
					</Col>

					<Col lg="12" className="text-center pt-5">
						<p className="copyright">
							Copyright {year}, design and develop by DhannyPou. All riights
							reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
