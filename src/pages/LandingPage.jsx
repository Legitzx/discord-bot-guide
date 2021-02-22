import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/App.css";
import logo from "../stylesheets/img/logo.png";

function LandingPage() {
	return (
		<div className="home-page-main">
			<div className="App-header-main">
				<img src={logo} alt="DeepWebDevelopers Logo" />
			</div>

			<p>
				<Link className="basic-link" to="/discordjs-guide/404Exmaple">
					Invalid Router test.
				</Link>
			</p>
		</div>
	);
}

export default LandingPage;
