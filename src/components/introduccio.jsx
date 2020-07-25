import React from 'react';
import ReactDOM from 'react-dom';
import './css/introduccio.css';
import Serveis_Intro from './serveis_intro';
import Tecnologies_Intro from './tecnologies_intro';
import Clients from './clients';

class Introduccio extends React.Component {
	render() {
		return (
			<div>
				<div className="contenidor foto">
					<div className="div-intro">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<h1 className="titol">
										Som <span style={{ color: '#d67c30' }}>La Capsa de Trons</span>
									</h1>
								</div>
							</div>
							<div className="row div-subtitol">
								<div className="col-12">
									<h2 className="subtitol">
										Dissenyadors de sonorització, il·luminació i noves tecnologies.
									</h2>
								</div>
							</div>
							<div className="row div-inspira">
								<div className="col-12">
									<h2 className="subtitol" style={{ textAlign: 'center' }}>
										Inspira't amb nosaltres!
									</h2>
								</div>
							</div>
							<div className="d-flex row justify-content-center">
								<svg
									width="4rem"
									height="4rem"
									viewBox="0 0 16 16"
									class="bi bi-arrow-bar-down margin_flecha"
									fill="white"
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
				<Serveis_Intro />
				<Tecnologies_Intro />
				<Clients />
			</div>
		);
	}
}

export default Introduccio;
