import React from 'react';
import ReactDOM from 'react-dom';
import './css/header.css';
import { render } from '@testing-library/react';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navbar_class: 'navbar navbar-expand-md navbar-dark fixed-top',
			abierto: false
		};
	}
	changeClass = (result) => {
		this.setState({
			navbar_class: result
		});
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		this.changeClass('navbar navbar-expand-md navbar-dark fixed-top bg-dark');
		if (window.scrollY === 0 && !this.state.abierto)
			this.changeClass('navbar navbar-expand-md navbar-dark fixed-top');
	};

	clickHandler = (event) => {
		const clase = this.state.navbar_class;
		if (clase === 'navbar navbar-expand-md navbar-dark fixed-top')
			this.changeClass('navbar navbar-expand-md navbar-dark bg-dark fixed-top');
		else {
			if (window.scrollY === 0) this.changeClass('navbar navbar-expand-md navbar-dark fixed-top');
		}
		this.setState({ abierto: !this.state.abierto });
	};

	render() {
		return (
			<div className="container" ref={this.myRef} onScroll={this.handleScroll}>
				<div className="row">
					<div className="col-12">
						<nav className={this.state.navbar_class}>
							<a className="navbar-brand" href="/">
								<img className="logo" src="./images/icon.jpg" />
							</a>

							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#collapse_target"
								onClick={this.clickHandler}
							>
								<span className="navbar-toggler-icon" />
							</button>

							<div className="collapse navbar-collapse justify-content-end" id="collapse_target">
								<ul className="navbar-nav">
									<li className="item-menu">
										<a className="cool-link" href="/serveis">
											Serveis
										</a>
									</li>
									<li className="item-menu">
										<a className="cool-link" href="/menu_gourmet">
											Menú gourmet
										</a>
									</li>
									<li className=" item-menu">
										<a className="cool-link" href="/historia">
											Qui som
										</a>
									</li>
									<li className="item-menu">
										<a className="cool-link" href="/contacte">
											Contacte
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
}

export default withRouter(Header);
