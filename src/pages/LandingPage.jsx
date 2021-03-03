import React from "react";
// import { Link } from "react-router-dom";
import "../stylesheets/App.css";
import logo from "../stylesheets/img/logo2.png";

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
				<h1 style={{ margin: 40 }}>New to bot development?</h1>
				<div className="landing-page-container">
					<p>
						Well thats okay, on this website we will walk through how to make
						your own discord bot!
					</p>
					<p>
						First setps
						{logo}
					</p>
				</div>
			</div>
		</>
	);
}

export default LandingPage;
