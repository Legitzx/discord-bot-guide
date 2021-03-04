import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
	{
		title: "Mission",
		imageUrl: "img/undraw_docusaurus_mountain.svg",
		description: (
			<>
				Life is full of challenges, our goal is to make creating discord bots as
				simple as possible for all users.
			</>
		),
		secondParagraph: <>{/* Adding this later */}</>,
	},
	{
		title: "Supported Languages",
		imageUrl: "img/undraw_docusaurus_tree.svg",
		description: (
			<>
				Currently our documentation only supports the <code>javascript</code>{" "}
				language. However If you wish to support the documentation you can.
				Simply head over to our{" "}
				<Link to={"/docs/home/doc2"}>Contributor Page!</Link>
			</>
		),
	},
	{
		title: "Powered by React",
		imageUrl: "img/undraw_docusaurus_react.svg",
		description: (
			<>
				Discord Bot Guide is Powered by the React Docusaurus framework. Very
				simular to vuepress.
			</>
		),
	},
];

function Feature({ imageUrl, title, description, secondParagraph }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx("col col--4", styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h2>{title}</h2>
			<p>{description}</p>
			<p>{secondParagraph}</p>
		</div>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<header className={clsx("hero hero--primary", styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={clsx(
								"button button--outline button--secondary button--lg",
								styles.getStarted
							)}
							to={useBaseUrl("docs/")}
						>
							Get Started
						</Link>
					</div>
					<br></br>
					<h4>Site is still in alpha. Not everything is complete.</h4>
				</div>
			</header>
			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;
