import React from 'react';
import ReactDOM from 'react-dom';
import './css/introduccio.css';

function Introduccio() {
	return (
		<div className="container-fluid p-0 foto">
			<div className="div-intro">
				<div className="row">
					<div className="col-10 offset-1">
						<h1 className="titol">
							Som <span style={{ color: 'orange' }}>La Capsa de Trons</span>
						</h1>
					</div>
				</div>
				<div className="row div-subtitol">
					<div className="col-10 offset-1">
						<h2 className="subtitol">Dissenyadors de sonorització, il·luminació i noves tecnologies.</h2>
					</div>
				</div>
				<div className="row div-inspira">
					<div className="col-10 offset-1">
						<h2 className="subtitol" style={{ textAlign: 'center' }}>
							Inspira't amb nosaltres!
						</h2>
					</div>
				</div>
				<div className="row div-buttons">
					<div className="d-flex col-10 offset-1 justify-content-center">
						<a href="./serveis">
							<button type="button" class="btn btn-outline-light">
								SERVEIS
							</button>
						</a>
						<a href="./la_nostra_historia">
							<button type="button" class="btn btn-outline-light">
								LA NOSTRA HISTÒRIA
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Introduccio;
