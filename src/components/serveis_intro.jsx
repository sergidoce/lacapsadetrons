import React from 'react';
import ReactDOM from 'react-dom';
import './css/serveis_intro.css';

class Serveis_Intro extends React.Component {
	render() {
		return (
			<div className="container" style={{ fontFamily: 'Montserrat' }}>
				<div className="div1 text-light fade-in">
					<p className="text1">Coneix els nostres serveis</p>
					<p className="text2">
						Disposem d'equips moderns i versàtils per a qualsevol tipus d'acte. Porta'ns la teva idea i
						junts la farem creixer.
					</p>
				</div>

				<div className="flexbox-container">
					<div className="carta_serveis fade-in">
						<div className="body_carta_servei">
							<div className="d-flex justify-content-center">
								<svg
									width="4rem"
									height="4rem"
									viewBox="0 0 16 16"
									class="bi bi-volume-up-fill"
									fill="#d67c30"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
									<path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
									<path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z" />
									<path
										fill-rule="evenodd"
										d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
									/>
								</svg>
							</div>
							<div className="d-flex justify-content-center text-light">
								<p className="titol_carta_servei">Sonorització</p>
							</div>
						</div>
					</div>

					<div className="carta_serveis fade-in">
						<div className="body_carta_servei">
							<div className="d-flex justify-content-center">
								<svg
									width="4rem"
									height="4rem"
									viewBox="0 0 16 16"
									class="bi bi-lightning-fill"
									fill="#d67c30"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
									/>
								</svg>
							</div>
							<div className="d-flex justify-content-center text-light">
								<p className="titol_carta_servei">Il·luminació</p>
							</div>
						</div>
					</div>

					<div className="carta_serveis fade-in">
						<div className="body_carta_servei">
							<div className="d-flex justify-content-center">
								<svg
									width="4rem"
									height="4rem"
									viewBox="0 0 16 16"
									class="bi bi-people-fill"
									fill="#d67c30"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
									/>
								</svg>
							</div>
							<div className="d-flex justify-content-center text-light">
								<p className="titol_carta_servei">Assistència tècnica</p>
							</div>
						</div>
					</div>

					<div className="carta_serveis fade-in">
						<div className="body_carta_servei">
							<div className="d-flex justify-content-center">
								<svg
									width="4rem"
									height="4rem"
									viewBox="0 0 16 16"
									class="bi bi-tools"
									fill="#d67c30"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"
									/>
									<path
										fill-rule="evenodd"
										d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"
									/>
								</svg>
							</div>
							<div className="d-flex justify-content-center text-light">
								<p className="titol_carta_servei">Producció tècnica</p>
							</div>
						</div>
					</div>

					<div className="carta_serveis fade-in">
						<div className="body_carta_servei">
							<div className="d-flex justify-content-center">
								<svg
									width="4rem"
									height="4rem"
									viewBox="0 0 16 16"
									class="bi bi-shop"
									fill="#d67c30"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M0 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM3.12 1.175A.5.5 0 0 1 3.5 1h9a.5.5 0 0 1 .38.175l2.759 3.219A1.5 1.5 0 0 1 16 5.37v.13h-1v-.13a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.13H0v-.13a1.5 1.5 0 0 1 .361-.976l2.76-3.22z"
									/>
									<path d="M2.375 6.875c.76 0 1.375-.616 1.375-1.375h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 1 0 2.75 0h1a2.375 2.375 0 0 1-4.25 1.458 2.371 2.371 0 0 1-1.875.917A2.37 2.37 0 0 1 8 6.958a2.37 2.37 0 0 1-1.875.917 2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.5h1c0 .76.616 1.375 1.375 1.375z" />
									<path d="M4.75 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
									<path
										fill-rule="evenodd"
										d="M2 7.846V7H1v.437c.291.207.632.35 1 .409zm-1 .737c.311.14.647.232 1 .271V15H1V8.583zm13 .271a3.354 3.354 0 0 0 1-.27V15h-1V8.854zm1-1.417c-.291.207-.632.35-1 .409V7h1v.437zM3 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V15H7v-5H4v5H3V9.5zm6 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4zm1 .5v3h2v-3h-2z"
									/>
								</svg>
							</div>
							<div className="d-flex justify-content-center text-light">
								<p className="titol_carta_servei">Gestió d'espais</p>
							</div>
						</div>
					</div>

					<div className="carta_serveis fade-in">
						<div className="body_carta_servei">
							<div className="d-flex justify-content-center">
								<svg
									width="4rem"
									height="4rem"
									viewBox="0 0 16 16"
									class="bi bi-cart-fill"
									fill="#d67c30"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
									/>
								</svg>
							</div>
							<div className="d-flex justify-content-center text-light">
								<p className="titol_carta_servei">Venda i instal·lació</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Serveis_Intro;
