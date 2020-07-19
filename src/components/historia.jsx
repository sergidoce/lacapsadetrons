import React from 'react';
import ReactDOM from 'react-dom';
import './css/historia.css';

function Historia() {
	return (
		<div className="container-fluid" style={{ fontFamily: 'Montserrat' }}>
			<div className="row text-light">
				<div className="col-5 offset-1">
					<h1 className="titol">Sobre nosaltres</h1>
					<h2 className="subtitol">
						Ubicats a Sabadell, som una empresa de serveis integrals de so i il·luminació que cobrim tot
						tipus d'espectacles i esdeveniments.
					</h2>
				</div>
			</div>
			<div className="row text-light">
				<div className="col-5 offset-1" style={{ position: 'absolute' }}>
					<p className="paragraf">
						Desde fa més de 8 anys, treballadors del sector vam decidir emprendre la nostra propia aventura
						profesional, on avui dia podem oferir un servei atent, eficient, i amb un equip humà de tècnics
						de so, video, i il·luminació altament qualificats. El nostre aval és la confiança dels nostres
						clients, que dia a dia són més, i gràcies a ells estem seguint un constant procés de creixement
						i modernització.
					</p>
				</div>
				<div className="col-4 col-sm offset-7 div-imagen">
					<img src="/images/nosaltres1.jpg" class="rounded mx-auto d-block" alt="..." />
				</div>
			</div>
			<div className="row text-light">
				<div className="col-5 offset-1">
					<p className="paragraf">
						LA CAPSA DE TRONS sóm una empresa que oferim serveis integrals de so, audiovisuals,
						il·luminació, teatre musical, megafonies i instal·lacions per tot tipus d’espectacles i
						esdeveniments. Disposem d’equips de primeres marques per satisfer les necessitats més exigents,
						i d’equips més versàtils per afrontar qualsevol esdeveniment.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Historia;
