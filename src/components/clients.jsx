import React from 'react';
import ReactDOM from 'react-dom';
import './css/serveis_intro.css';

function Clients() {
	return (
		<div className="container" style={{ fontFamily: 'Montserrat' }}>
			<div className="div1 text-light fade-in">
				<p className="text1">Els clients que ja s'han beneficiat</p>
				<p className="text2">
					Les diferents organitzacions que ja han comptat amb nosaltres i que ens fan creixer cada dia.
				</p>
			</div>

			<div className="flexbox-container">
				<img src="./images/empreses/exits.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/imsa.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/ambla.png" className="imatge_client img-fluid fade-in" alt="" />
				<img
					src="./images/empreses/teatre_sant_vicenç.png"
					className="imatge_client img-fluid fade-in"
					alt=""
				/>
				<img src="./images/empreses/castellers.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/catarres.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/catrock.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/esplai.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/badiavalles.png" className="imatge_client img-fluid fade-in" alt="" />
				<img
					src="./images/empreses/bastoners_sabadell.png"
					className="imatge_client img-fluid fade-in"
					alt=""
				/>
				<img src="./images/empreses/santquirze.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/barbera.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/zombie.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/bonobos.png" className="imatge_client img-fluid fade-in" alt="" />
				<img src="./images/empreses/llh.png" className="imatge_client img-fluid fade-in" alt="" />
			</div>
		</div>
	);
}

export default Clients;
