import React from "react";
import DiscordNoobMD from "./DiscordjsNoob.md";
import ReactMarkdown from "react-markdown";
// import { Link } from "react-router-dom";

export default function introPage() {
	return (
		<div className="home-page-main">
			<h1>Rendering Markdown?</h1>
			<ReactMarkdown source={DiscordNoobMD} />
		</div>
	);
}
