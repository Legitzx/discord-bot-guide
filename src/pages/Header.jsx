import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../stylesheets/comp/header.css";

class MainHeader extends Component {
	constructor(props) {
		super(props);

		// this.handleClickHome = this.handleClickHome.bind(this);
		// this.handleClickGuide = this.handleClickGuide.bind(this);

		this.handleClickHome = async () => {
			this.props.history.push("/discordjs-guide");
		};

		this.handleClickGuide = async () => {
			this.props.history.push("/discordjs-guide/introduction-start");
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
						<a href="">Discord</a>
						<Link onClick={this.handleClickGuide}>Guide</Link>
						<Link to="/discordjs-guide/test">Test</Link>
					</ul>
				</div>
			</div>
		);
	}
}

export default withRouter(MainHeader);
