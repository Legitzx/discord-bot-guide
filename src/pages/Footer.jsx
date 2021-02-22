import React, { Component } from "react";
import "../stylesheets/index.css";

class MainFooter extends Component {
	render() {
		return (
			<div>
				<div class="footer-link">
					<p>
						&copy;
						<a
							href="https://github.com/DeepWebDevelopers"
							className="basic-link"
						>
							DeepWebDevelopers
						</a>
					</p>
				</div>
			</div>
		);
	}
}

export default MainFooter;
