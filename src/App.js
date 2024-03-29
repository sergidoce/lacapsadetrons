import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Introduccio from './components/introduccio';
import Footer from './components/footer';
import Serveis from './components/serveis';
import Contacte from './components/contacte';
import Historia from './components/historia';
import Menu_Gourmet from './components/menu_gourmet';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="bg-dark">
				<Header />
				<Switch>
					<Route path="/" exact component={Introduccio} />
					<Route path="/serveis" exact component={Serveis} />
					<Route path="/menu_gourmet" exact component={Menu_Gourmet} />
					<Route path="/contacte" exact component={Contacte} />
					<Route path="/historia" exact component={Historia} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
