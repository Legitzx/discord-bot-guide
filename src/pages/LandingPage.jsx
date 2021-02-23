import React from "react";
// import { Link } from "react-router-dom";
import "../stylesheets/App.css";
import logo from "../stylesheets/img/logo.png";

function LandingPage() {
	// var dateString = new Date().toDateString();

	// new webpack.DefinePlugin({
	// 	LAST_UPDATED: JSON.stringify(dateString),
	// });

	return (
		<>
			<div className="App-header-main">
				<img className="Logo" src={logo} alt="DeepWebDevelopers Logo" />
			</div>
			<div className="home-page-main">
				{/* Logo in heading */}
				<p>Landing Page</p>
			</div>
		</>
	);
}

export default LandingPage;
