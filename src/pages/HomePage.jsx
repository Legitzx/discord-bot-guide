import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/App.css";

function HomePage() {
	return (
		<div>
			<div className="App-header-main">Discord js docs!</div>
			<h1>More coming soon!</h1>
			<a
				className="Button"
				target="blank"
				href="https://github.com/DeepWebDevelopers/discordjs-guide"
			>
				Source Code
			</a>
			<p>
				<Link to="/404Exmaple" className="Button">
					Invalid Router test.
				</Link>
			</p>
		</div>
	);
}

export default HomePage;
