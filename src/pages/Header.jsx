import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainHeader extends Component {
	render() {
		return (
			<div>
				<div class="Header-link">
					<h1>
						<Link to="/discordjs-guide" className="link">
							Discordjs Home
						</Link>
					</h1>
					{/* Using "/discordjs-guide" as root */}
					<ul class="nav-link">
						<Link to="/discordjs-guide">Github</Link>
						<Link to="/discordjs-guide">Discord</Link>
						<Link to="/discordjs-guide">Guide</Link>
						<Link to="/discordjs-guide">Test</Link>
					</ul>
				</div>
			</div>
		);
	}
}

export default MainHeader;
