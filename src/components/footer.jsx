import React from 'react';
import ReactDOM from 'react-dom';
import './css/footer.css';

function Footer() {
	return (
		<div className="container-fluid p-0 footer">
			<div className="container padding">
				<div className="flexbox-container">
					<div className="border-footer">
						<p>© La Capsa de Trons 2015</p>
						<p>Carrer Eivissa 56, 08192 Sant Quirze del Vallès</p>
						<p>info@lacapsadetrons.com</p>
						<p>93 727 98 94</p>
					</div>

					<div>
						<a href="">
							<img src="./images/media/instagram.png" className="img-fluid media_icon" alt="" />
						</a>
						<a href="https://ca-es.facebook.com/lacapsadt/">
							<img src="./images/media/facebook.png" className="img-fluid media_icon" alt="" />
						</a>
						<a href="https://twitter.com/lacapsadetrons?lang=ca">
							<img src="./images/media/twitter.png" className="img-fluid media_icon" alt="" />
						</a>
						<a href="https://www.linkedin.com/company/lacapsadetrons/">
							<img src="./images/media/linkedin.png" className="img-fluid media_icon" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;
