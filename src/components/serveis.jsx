import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './css/serveis.css';

function Serveis() {
	return (
		<div className="container-fluid">
			<div class="row">
				<div className="col-10 offset-1">
					<div class="card-deck mt-5 justify-content-center">
						<Card
							title="Lloguer"
							imgsrc="/images/sonoritzacio.jpg"
							text="Servei integral per a sonortizar qualsevol tipus d'espectacle, esdeveniment, festival, acte, fira, etc..."
						/>
						<Card
							title="Menú Gourmet"
							imgsrc="/images/iluminacio.png"
							text="Servei integral, tant personal com tècnic professional, per a il·luminar qualsevol tipus d'esdeveniment"
						/>
					</div>

					<div class="card-deck mt-5 justify-content-center">
						<Card
							title="Sonorització"
							imgsrc="/images/sonoritzacio.jpg"
							text="Servei integral per a sonortizar qualsevol tipus d'espectacle, esdeveniment, festival, acte, fira, etc..."
						/>
						<Card
							title="Il·luminació"
							imgsrc="/images/iluminacio.png"
							text="Servei integral, tant personal com tècnic professional, per a il·luminar qualsevol tipus d'esdeveniment"
						/>
					</div>

					<div class="card-deck mt-5 justify-content-center">
						<Card
							title="Assistència tècnica"
							imgsrc="/images/assistencia.jpg"
							text="Proporcionem personal altament qualificat i especialitzat per les funcions de: tècnic de so, tècnic de llums, tècnic de video, auxiliar de so, auxiliar de llums, auxiliar de video,
							tècnics i auxiliars de maquinària, personal de càrrega i descàrrega, regidories d’escena…"
						/>
						<Card
							title="Producció tècnica"
							imgsrc="/images/produccio.jpg"
							text="Servei integral per a sonortizar qualsevol tipus d'espectacle, esdeveniment, festival, acte, fira, etc..."
						/>
					</div>

					<div class="card-deck mt-5 justify-content-center">
						<Card
							title="Gestió d'espais"
							imgsrc="/images/gestio.jpg"
							text="Servei integral, tant personal com tècnic professional, per a il·luminar qualsevol tipus d'esdeveniment"
						/>
						<Card
							title="Venda i instal·lació"
							imgsrc="/images/venda.jpg"
							text="Proporcionem personal altament qualificat i especialitzat per les funcions de: tècnic de so, tècnic de llums, tècnic de video, auxiliar de so, auxiliar de llums, auxiliar de video,
							tècnics i auxiliars de maquinària, personal de càrrega i descàrrega, regidories d’escena…"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Serveis;
