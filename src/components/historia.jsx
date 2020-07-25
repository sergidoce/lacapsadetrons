import React from 'react';
import ReactDOM from 'react-dom';
import './css/historia.css';

function Historia() {
	return (
		<div>
			<div className="contenidor foto_historia">
				<div className="intro_menu text-light filtro">
					<div className="container div1_menu">
						<div>
							<h1 className="titol_menu">
								Qui <span style={{ color: '#d67c30' }}>som</span>
							</h1>
							<p className="subtitol_menu">
								Ubicats a Sabadell, som una empresa de serveis integrals de so i il·luminació que cobrim
								tot tipus d'espectacles i esdeveniments.
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

			<div className="container text-light" style={{ fontFamily: 'Montserrat' }}>
				<div className="margin_historia">
					<div className="d-flex justify-content-left">
						<h2 className="titol_historia">D'on venim</h2>
					</div>
					<div>
						<p className="paragraf_historia">
							Desde fa més de 8 anys, treballadors del sector vam decidir emprendre la nostra propia
							aventura profesional, on avui dia podem oferir un servei atent, eficient, i amb un equip
							humà de tècnics de so, video, i il·luminació altament qualificats. El nostre aval és la
							confiança dels nostres clients, que dia a dia són més, i gràcies a ells estem seguint un
							constant procés de creixement i modernització.
						</p>
					</div>
					<div className="d-flex justify-content-center">
						<img src="./images/nosaltres2.jpg" className="img-fluid mt-5 mb-5" alt="" />
					</div>
				</div>

				<div className="margin_historia">
					<div className="d-flex justify-content-left">
						<h2 className="titol_historia">Que fem</h2>
					</div>
					<div>
						<p className="paragraf_historia">
							LA CAPSA DE TRONS sóm una empresa que oferim serveis integrals de so, audiovisuals,
							il·luminació, teatre musical, megafonies i instal·lacions per tot tipus d’espectacles i
							esdeveniments. Disposem d’equips de primeres marques per satisfer les necessitats més
							exigents, i d’equips més versàtils per afrontar qualsevol esdeveniment.
						</p>
					</div>
					<div className="d-flex justify-content-center">
						<img src="./images/nosaltres3.jpg" className="img-fluid mt-5 mb-5" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Historia;
