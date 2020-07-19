import React from 'react';
import ReactDOM from 'react-dom';
import './css/header.css';

function Header() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-10 offset-1">
					<nav className="navbar navbar-expand-md bg-dark navbar-dark" style={{ fontFamily: 'Montserrat' }}>
						<a className="navbar-brand" href="/">
							<img className="logo" src="./images/icon.jpg" />
						</a>

						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#collapse_target"
						>
							<span className="navbar-toggler-icon" />
						</button>

						<div className="collapse navbar-collapse" id="collapse_target">
							<ul className="navbar-nav">
								<li className="nav-item item-menu">
									<a className="nav-link" href="/serveis">
										SERVEIS
									</a>
								</li>
								<li className="nav-item item-menu">
									<a className="nav-link" href="">
										MENÚ GOURMET
									</a>
								</li>
								<li className="nav-item item-menu">
									<a className="nav-link" href="/historia">
										LA NOSTRA HISTÒRIA
									</a>
								</li>
								<li className="nav-item item-menu">
									<a className="nav-link" href="/contacte">
										CONTACTE
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Header;
