import React from 'react';
import ReactDOM from 'react-dom';
import './css/serveis_intro.css';

class Tecnologies_Intro extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const faders = document.querySelectorAll('.fade-in');
		const appearOptions = { threshold: 1 };
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
			<div className="tecnologies_intro">
				<div className="container" style={{ fontFamily: 'Montserrat' }}>
					<div className="div1 text-light fade-in">
						<p className="text1 pt-5">Les tecnologies que usem</p>
						<p className="text2">
							Fem servir les ultimes tecnologies en el sector per a oferir els millors i més exclusius
							serveis als nostres clients.
						</p>
					</div>

					<div className="flexbox-container">
						<div className="carta_serveis fade-in">
							<div className="body_carta_tecno">
								<div className="imatge_tecno">
									<img src="./images/tecnologies/digico.png" className="img-fluid" alt="" />
								</div>
							</div>
						</div>

						<div className="carta_serveis fade-in">
							<div className="body_carta_tecno">
								<div className="imatge_tecno">
									<img src="./images/tecnologies/klang.png" className="img-fluid" alt="" />
								</div>
							</div>
						</div>

						<div className="carta_serveis fade-in">
							<div className="body_carta_tecno">
								<div className="imatge_tecno">
									<img src="./images/tecnologies/soundscape.png" className="img-fluid" alt="" />
								</div>
							</div>
						</div>

						<div className="carta_serveis fade-in">
							<div className="body_carta_tecno">
								<div className="imatge_tecno">
									<img src="./images/tecnologies/db.png" className="img-fluid" alt="" />
								</div>
							</div>
						</div>
						<div className="carta_serveis fade-in">
							<div className="body_carta_tecno">
								<div className="imatge_tecno">
									<img src="./images/tecnologies/qlab.png" className="img-fluid" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Tecnologies_Intro;
