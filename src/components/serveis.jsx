import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './css/serveis.css';

class Serveis extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const faders = document.querySelectorAll('.fade-in');
		const appearOptions = { threshold: 0.5 };
		const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				else {
					entry.target.classList.add('appear');
					appearOnScroll.unobserve(entry.target);
				}
			});
		}, appearOptions);

		faders.forEach((fader) => {
			appearOnScroll.observe(fader);
		});
	}
	render() {
		return (
			<div>
				<div className="contenidor foto_serveis">
					<div className="intro_menu text-light filtro">
						<div className="container div1_menu">
							<div>
								<h1 className="titol_menu">
									Descobreix els nostres <span style={{ color: '#d67c30' }}>serveis</span>
								</h1>
								<p className="subtitol_menu">
									Oferim serveis integrals de so, audiovisuals, il·luminació, teatre musical,
									megafonies i instal·lacions per tot tipus d'espectacles i esdeveniments.
								</p>

								<svg
									width="4em"
									height="4em"
									viewBox="0 0 16 16"
									class="bi bi-arrow-bar-down margin_flecha"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M11.354 10.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L8 12.793l2.646-2.647a.5.5 0 0 1 .708 0z"
									/>
									<path
										fill-rule="evenodd"
										d="M8 6a.5.5 0 0 1 .5.5V13a.5.5 0 0 1-1 0V6.5A.5.5 0 0 1 8 6zM2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className="elem">
					<div className="container text-light" style={{ textAlign: 'left', position: 'relative' }}>
						<div className="flexbox-container">
							<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center border-left-servei fade-in">
								<h1 className="titol_servei">Lloguer de material</h1>
								<h3 className="subtitol_servei" style={{ textAlign: 'justify' }}>
									Posem a disposició dels nostres clients tot el material de so, il·luminació i video
									en categoría de lloguer amb assistència técnica o sense. Tot aquest material es
									revisa periòdicament i s’entrega en perfecte estat de funcionament. Els nostres
									clients disposen també de diferents descomptes segons volum de comanda i tipología
									de client. A més a més s’apliquen diferents coeficients en funció de la durada del
									lloguer.
								</h3>
							</div>
							<div className="d-flex col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center fade-in">
								<div>
									<img src="./images/nosaltres1.jpg" className="img-responsive img_item" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="elem2">
					<div className="container text-light" style={{ textAlign: 'right', position: 'relative' }}>
						<div className="flexbox-container">
							<div
								div
								className="col-sm-12 order-sm-1 col-md-12 order-md-1 col-lg-6 order-lg-2 col-xl-6 order-xl-2 justify-content-center border-right-servei fade-in"
							>
								<h1 className="titol_servei">Sonorització</h1>
								<h3 className="subtitol_servei" style={{ textAlign: 'justify' }}>
									Servei integral per a sonoritzar qualsevol tipus d'espectacle, esdeveniment,
									festival, acte, fira, etc...
								</h3>
							</div>
							<div className="d-flex col-sm-12 order-sm-2 col-md-12 order-md-2 col-lg-6 order-lg-1 col-xl-6 order-xl-1 justify-content-center fade-in">
								<div>
									<img src="./images/sonoritzacio.jpg" className="img-responsive img_item" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="elem">
					<div className="container text-light" style={{ textAlign: 'left', position: 'relative' }}>
						<div className="flexbox-container">
							<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center border-left-servei fade-in">
								<h1 className="titol_servei">Il·luminació</h1>
								<h3 className="subtitol_servei" style={{ textAlign: 'justify' }}>
									Servei integral, tant personal com tècnic professional, per a il·luminar qualsevol
									tipus d'esdeveniment.
								</h3>
							</div>
							<div className="d-flex col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center fade-in">
								<div>
									<img src="./images/iluminacio.png" className="img-responsive img_item" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="elem2">
					<div className="container text-light" style={{ textAlign: 'right', position: 'relative' }}>
						<div className="flexbox-container">
							<div
								div
								className="col-sm-12 order-sm-1 col-md-12 order-md-1 col-lg-6 order-lg-2 col-xl-6 order-xl-2 justify-content-center border-right-servei fade-in"
							>
								<h1 className="titol_servei">Assistència tècnica</h1>
								<h3 className="subtitol_servei" style={{ textAlign: 'justify' }}>
									Proporcionem personal altament qualificat i especialitzat per les funcions de:
									tècnic de so, tècnic de llums, tècnic de video, auxiliar de so, auxiliar de llums,
									auxiliar de video, tècnics i auxiliars de maquinària, personal de càrrega i
									descàrrega, regidories d’escena…
								</h3>
							</div>
							<div className="d-flex col-sm-12 order-sm-2 col-md-12 order-md-2 col-lg-6 order-lg-1 col-xl-6 order-xl-1 justify-content-center fade-in">
								<div>
									<img src="./images/assistencia.jpg" alt="" className="img-responsive img_item" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="elem">
					<div className="container text-light" style={{ textAlign: 'left', position: 'relative' }}>
						<div className="flexbox-container">
							<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center border-left-servei fade-in">
								<h1 className="titol_servei">Producció tècnica</h1>
								<h3 className="subtitol_servei" style={{ textAlign: 'justify' }}>
									Oferim producció tècnica per a espectacles, festivals o qualsevol tipus
									d'esdeveniment.
								</h3>
							</div>
							<div className="d-flex col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center fade-in">
								<div>
									<img src="./images/produccio.jpg" className="img-responsive img_item" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="elem2">
					<div className="container text-light" style={{ textAlign: 'right', position: 'relative' }}>
						<div className="flexbox-container">
							<div
								div
								className="col-sm-12 order-sm-1 col-md-12 order-md-1 col-lg-6 order-lg-2 col-xl-6 order-xl-2 justify-content-center border-right-servei fade-in"
							>
								<h1 className="titol_servei">Gestió d'espais</h1>
								<h3 className="subtitol_servei" style={{ textAlign: 'justify' }}>
									Servei de gestió tècnica per equipaments de sales, teatres, centres cívics, centres
									culturals, espais polivalents, bars musicals, discotèques, etc...
								</h3>
							</div>
							<div className="d-flex col-sm-12 order-sm-2 col-md-12 order-md-2 col-lg-6 order-lg-1 col-xl-6 order-xl-1 justify-content-center fade-in">
								<div>
									<img src="./images/gestio.jpg" alt="" className="img-responsive img_item" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="elem">
					<div className="container text-light" style={{ textAlign: 'left', position: 'relative' }}>
						<div className="flexbox-container">
							<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center border-left-servei fade-in">
								<h1 className="titol_servei">Venda i instal·lació</h1>
								<h3 className="subtitol_servei" style={{ textAlign: 'justify' }}>
									Venda i instal·lació d'equipaments de so, audiovisual, il·luminació, estructures i
									qualsevol accessori per l'espectacle
								</h3>
							</div>
							<div className="d-flex col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center fade-in">
								<div>
									<img src="./images/venda.jpg" className="img-responsive img_item" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="elem2">
					<div className="container text-light fade-in" style={{ position: 'relative' }}>
						<h1 style={{ textAlign: 'center' }} className="text_contacta">
							Estàs interessat/ada en algún dels nostres serveis?
						</h1>
						<div className="d-flex justify-content-center mt-3">
							<a href="./contacte">
								<button type="button" class="btn btn-outline-light">
									Contacta!
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Serveis;
