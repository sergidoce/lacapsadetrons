import React from 'react';
import ReactDOM from 'react-dom';
import './css/serveis.css';

function Card(props) {
	return (
		<div className="card margin">
			<img className="card-img" src={props.imgsrc} alt="Card image cap" />
			<div class="card-body">
				<h5 class="card-title text-light titulo">{props.title}</h5>
				<p class="card-text text-light texto">{props.text}</p>
				<a href="#" class="btn btn-outline-light m-0" id="boton">
					Més informació
				</a>
			</div>
		</div>
	);
}

export default Card;
