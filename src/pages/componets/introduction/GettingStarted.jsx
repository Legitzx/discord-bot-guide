import React from "react";
import mdDocument from "./GettingStarted.md";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";

const GettingStarted = () => {
	const [content, setContent] = useState("");

	useEffect(() => {
		fetch(mdDocument)
			.then((res) => res.text())
			.then((md) => {
				setContent(md);
			});
	});

	return (
		<div>
			<div className="home-page-main">
				<Markdown className="markdown" children={content} />
			</div>
		</div>
	);
};

export default GettingStarted;
