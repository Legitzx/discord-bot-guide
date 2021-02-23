import React, { Component } from "react";
import "../stylesheets/comp/footer.css";

class MainFooter extends Component {
	render() {
		return (
			<div>
				<div class="footer-build">
					<p>
						&copy;
						<a
							href="https://github.com/DeepWebDevelopers"
							className="basic-link"
							target="blank"
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
