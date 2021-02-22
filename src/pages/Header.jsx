import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/comp/header.css";

class MainHeader extends Component {
	render() {
		return (
			<div>
				<div class="Header-link">
					<h1>
						<Link to="/" className="landing-page-button">
							Discordjs
						</Link>
					</h1>
					{/* Using "/discordjs-guide" as root */}
					<ul className="nav-link">
						<a
							href="https://github.com/DeepWebDevelopers/discordjs-guide"
							target="blank"
						>
							Github
						</a>
						<a href="#">Discord</a>
						<Link to="/guide-starthere">Guide</Link>
						<Link to="/test">Test</Link>
					</ul>
				</div>
			</div>
		);
	}
}

export default MainHeader;
