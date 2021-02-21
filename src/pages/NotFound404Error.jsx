import React from "react";
import { Link } from "react-router-dom";

export default function NotFound404() {
	return (
		<div>
			<h1>Sorry I can't find this page. You pay have the wrong URL.</h1>
			<p>
				Please use{" "}
				<Link className="Button" to="/">
					This link
				</Link>{" "}
				to return the the home page.
			</p>
		</div>
	);
}
