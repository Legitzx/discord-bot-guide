import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import "../stylesheets/App.css";

class MainHeader extends Component {
	constructor(props) {
		super(props);

		// this.handleClickHome = this.handleClickHome.bind(this);
		// this.handleClickGuide = this.handleClickGuide.bind(this);

		this.handleClickHome = async () => {
			this.props.history.push("/");
		};

		this.handleClickGuide = async () => {
			this.props.history.push("/introduction-start");
		};
	}

	render() {
		return (
			<div>
				<div class="Header-link">
					<h1>
						<Link
							onClick={this.handleClickHome}
							className="landing-page-button"
						>
							Discord Bot's
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
						<a href="">Discord</a>
						<Link onClick={this.handleClickGuide}>Guide</Link>
						<Link to="/test">Test</Link>
					</ul>
				</div>
			</div>
		);
	}
}

export default withRouter(MainHeader);
