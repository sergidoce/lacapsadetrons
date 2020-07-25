import React from 'react';
import ReactDOM from 'react-dom';
import './css/menu_gourmet.css';

class Menu_Gourmet extends React.Component {
	render() {
		return (
			<div>
				<div className="contenidor foto_menu">
					<div className="intro_menu text-light filtro">
						<div className="container div1_menu">
							<div>
								<h1 className="titol_menu">
									Explora el nostre <span style={{ color: '#d67c30' }}>Menú Gourmet</span>
								</h1>
								<p className="subtitol_menu">
									És el nostre valor afegit, el que ens fa diferents i complementaris.
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
							<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
								<h1 className="titol_elem">Laboratori d'experiències</h1>
								<h3 className="subtitol_elem">Espai diàfon, lluminós i equipat.</h3>
								<ul>
									<li className="item_llista">Per a explorar</li>
									<li className="item_llista">Per a experimentar</li>
									<li className="item_llista">Per a crear</li>
								</ul>
							</div>
							<div>
								<div>
									<img src="./images/nosaltres1.jpg" className="img_item" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="elem2">
					<div className="container text-light" style={{ textAlign: 'left', position: 'relative' }}>
						<div className="flexbox-container">
							<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
								<div>
									<h1 className="titol_elem">Productes d'alta gamma</h1>
									<h3 className="subtitol_elem">
										Empoderem als professionals per canviar de lliga gràcies a les últimes
										tecnologies.
									</h3>
									<ul>
										<li className="item_llista">Digicó</li>
										<li className="item_llista">Klang</li>
										<li className="item_llista">QLab</li>
										<li className="item_llista">d & b</li>
									</ul>
								</div>
							</div>
							<div className="div2_menu">
								<div>
									<img src="./images/nosaltres1.jpg" className="img_item" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="elem">
					<div className="container text-light" style={{ position: 'relative' }}>
						<h1 className="text_contacta" style={{ textAlign: 'center' }}>
							Vols més informació?
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

export default Menu_Gourmet;
