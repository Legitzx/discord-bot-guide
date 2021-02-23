import React from "react";
import { Link } from "react-router-dom";

export default function NotFound404() {
	return (
		<div className="home-page-main">
			<h1>Sorry I can't find this page. You may have the wrong URL.</h1>
			<p>
				Please use {/* Using "/discordjs-guide" as root */}
				<Link className="basic-link" to="/discordjs-guide">
					This link
				</Link>{" "}
				to return the the home page.
			</p>
		</div>
	);
}
