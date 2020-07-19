import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com';
import './css/contacte.css';
import Alerta from './alerta';
import Success from './success';

class Contacte extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alert_message: ' '
		};

		this.sendEmail = this.sendEmail.bind(this);
	}

	sendEmail(e) {
		e.preventDefault();
		var nameValue = document.getElementById('name').value;
		var emailValue = document.getElementById('email').value;
		var subjectValue = document.getElementById('subject').value;
		var messageValue = document.getElementById('message').value;

		var enable = true;

		if (!nameValue || !emailValue || !subjectValue || !messageValue) enable = false;

		if (enable) {
			emailjs.sendForm('gmail', 'prova', '.contact-form', 'user_IVfFtpH1r79UJwdNuSF33').then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
			this.setState({ alert_message: 'success' });
		} else {
			this.setState({ alert_message: 'error' });
		}
	}

	render() {
		return (
			<div className="container-fluid mt-5 mb-5">
				<div className="row">
					<div className="col-10 offset-1">
						{this.state.alert_message == 'success' ? <Success /> : null}
						{this.state.alert_message == 'error' ? <Alerta /> : null}
						<form onSubmit={this.sendEmail} className="contact-form">
							<div className="form-group">
								<label className="text-light">Nom</label>
								<input
									type="text"
									className="form-control bg-dark text-light"
									name="user_name"
									id="name"
								/>
							</div>
							<div className="form-group">
								<label className="text-light">E-mail</label>
								<input
									type="email"
									className="form-control bg-dark text-light"
									name="user_email"
									id="email"
								/>
							</div>
							<div class="form-group">
								<label className="text-light">Subject</label>
								<input
									type="text"
									className="form-control bg-dark text-light mb-5"
									name="subject"
									id="subject"
								/>
								<label className="text-light">Explica'ns el que necessites</label>
								<textarea
									class="form-control bg-dark text-light"
									name="message"
									id="message"
									rows="5"
								/>
								<button type="submit" className="btn btn-lg btn-outline-light mt-5">
									Envia
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contacte;
