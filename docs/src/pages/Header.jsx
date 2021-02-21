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

					<ul class="nav-link">
						<Link to="/">Github</Link>
						<Link to="/">Discord</Link>
						<Link to="/">Guide</Link>
						<Link to="/">Test</Link>
					</ul>
				</div>
			</div>
		);
	}
}

export default MainHeader;
