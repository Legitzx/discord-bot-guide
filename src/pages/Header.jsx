import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainHeader extends Component {
	render() {
		return (
			<div>
				<div class="Header-link">
					<h1>
						<Link to="/" className="link">
							Discordjs Home
						</Link>
					</h1>
					{/* Using "/discordjs-guide" as root */}
					<ul class="nav-link">
						<a href="https://github.com/DeepWebDevelopers/discordjs-guide">
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
