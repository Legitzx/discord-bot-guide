import React from "react";
import DiscordNoobMD from "../../../components/guide/introduction/DiscordjsNoob.md";
import ReactMarkdown from "react-markdown";
// import { Link } from "react-router-dom";

export default function introPage() {
	return (
		<div>
			<h1>Rendering Markdown?</h1>
			<ReactMarkdown source={DiscordNoobMD} />
		</div>
	);
}
