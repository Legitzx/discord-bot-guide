// file: ./src/pages/team.js
import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
const TITLE = "Team";
const DESCRIPTION = "Awesome people working";

function Team() {
	return (
		<Layout title={TITLE} description={DESCRIPTION}>
			<main className="container margin-vert--lg">
				<div className="text--center margin-bottom--xl">
					<h1>{TITLE}</h1>
					<p>{DESCRIPTION}</p>
				</div>
				<div className="row">
					{/* card one */}
					<div className="col col--4 margin-bottom--lg">
						<div className={clsx("card", styles.showcaseUser)}>
							<div className="card__image">
								<img src="../../static/img/undraw_docusaurus_mountain.svg" />
							</div>
							<div className="card__body">
								<div className="avatar">
									<div className="avatar__intro margin-left--none">
										<h3 className="avatar__name">ThatGuyJamal</h3>
										<small className="avatar__subtitle">Coding for you!</small>
										<small>Discord: ThatGuyJamal#2695</small>
										<small>YouTube: ThatGuyJamal</small>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* card 2 */}
					<div className="col col--4 margin-bottom--lg">
						<div className={clsx("card", styles.showcaseUser)}>
							<div className="card__image">
								<img src="../../static/img/logo.svg" />
							</div>
							<div className="card__body">
								<div className="avatar">
									<div className="avatar__intro margin-left--none">
										<h3 className="avatar__name">
											This could be you...just saying
										</h3>
										<small className="avatar__subtitle">
											<Link to={"/docs/home/doc2"}>Join the team!</Link>
										</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
export default Team;
