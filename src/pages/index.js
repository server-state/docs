import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<>
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link className="button button--secondary button--lg" to="/docs">
							Get started
						</Link>
					</div>
				</div>
			</header>
			<img src="/static/img/waves/accent-above-1.svg" className="waves" />
		</>
	);
}

function ProductOverview() {
	return (
		<div className={clsx('container', styles.row)}>
			<div className="row">
				<div className="col col--4">
					<Link to="https://spark.adobe.com/video/TXiHkhbVWfOcW">
						<img
							src={useBaseUrl('/img/intro-video-link.svg')}
							alt="Play intro video"
						/>
					</Link>
				</div>
				<div className="col col--2">&nbsp;</div>
				<div className="col col--6">
					<h2>Monitor your servers better</h2>
					<div className="padding-bottom-lg">
						<h3>✔ Extensible</h3>
						<p>
							Lorem ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt
							ut labore et dolore magna aliquyam erat, sed diam voluptua. At
							vero eos
						</p>
					</div>
					<div className="padding-bottom-lg">
						<h3>✔ Adjustable</h3>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos
						</p>
					</div>
					<div className="padding-bottom-lg">
						<h3>✔ Easy to set up</h3>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolora. At vero eos
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

import useBaseUrl from '@docusaurus/useBaseUrl';

function EasyToDevelopFor() {
	return (
		<>
			<img src="/static/img/waves/accent-below-1.svg" className="waves" />
			<div className={clsx('hero hero--primary', styles.inverted)}>
				<div className="container">
					<div className="row">
						<div className="col">
							<h2>Easy to develop for</h2>
						</div>
					</div>
					<div className="row">
						<Highlight
							title="NodeJS, React & GraphQL"
							image={useBaseUrl('/img/icons/embed-code.svg')}
						>
							<p>
								We're using industry standards like NodeJS, React &amp; GraphQL
								for Server State.
							</p>
							<p>
								This means that both you and we ourselves can use a lot of
								tooling that already exists for these standards wihtout having
								to reinvent the wheel.
							</p>
						</Highlight>
						<Highlight
							title="Well documented"
							image={useBaseUrl('/img/icons/pencil.svg')}
						>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Provident, facere nulla exercitationem aliquam optio dolorum
							dolorem totam! Quaerat repudiandae voluptates, voluptate
							reprehenderit aut facere asperiores aperiam assumenda? Vero,
							soluta ea.
						</Highlight>
						<Highlight
							title="Eating our own dogfood"
							image={useBaseUrl('/img/icons/paw.svg')}
						>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Provident, facere nulla exercitationem aliquam optio dolorum
							dolorem totam! Quaerat repudiandae voluptates, voluptate
							reprehenderit aut facere asperiores aperiam assumenda? Vero,
							soluta ea.
						</Highlight>
					</div>
				</div>
			</div>
			<img src="/static/img/waves/accent-above-3.svg" className="waves" />
		</>
	);
}

function OpenSource() {
	return (
		<div className={clsx('container center', styles.row)}>
			<div className="row">
				<div className="col col--3">&nbsp;</div>
				<div className="col col--6">
					<h2>100 % Open Source</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Voluptatibus inventore accusantium facere eius odio ea optio, dolore
						facilis. Cumque earum fugit unde enim minus vel tempora nulla
						accusantium ex culpa.
					</p>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="https://github.com/server-state"
						>
							Server State on GitHub
						</Link>
					</div>
				</div>
				<div className="col col--3">&nbsp;</div>
			</div>
		</div>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />
			<ProductOverview />
			<EasyToDevelopFor />
			<OpenSource />
		</Layout>
	);
}

function Highlight({ title, image, children }) {
	return (
		<>
			<div className="col col--1" style={{ textAlign: 'right' }}>
				<img
					src={image}
					style={{
						width: '64px',
						// display: 'block',
						aspectRatio: '1',
						marginTop: '2em'
					}}
				/>
			</div>
			<div className="col col--3">
				<h3>{title}</h3>

				{children}
			</div>
		</>
	);
}
