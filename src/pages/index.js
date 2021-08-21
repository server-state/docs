import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Image } from '/components';
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
			<Image src="/static/img/waves/accent-above-1.svg" className="waves bottom" />
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
							We build Server State with extensibility as a first-class citizen.
							We even create many built-in functions as plugins. Want another
							notification style? Just install the plugin. Or, if no plugin
							exists yet, build it using our well-documented APIs.
						</p>
					</div>
					<div className="padding-bottom-lg">
						<h3>✔ Adjustable</h3>
						<p>
							Even if you are not a developer yourself, it's easy to adjust
							Server State to fit your needs. Whether it's by installing an
							additional plugin, re-configuring installed plugins, or something
							else: You can let Server State be the right tool for the job.
						</p>
					</div>
					<div className="padding-bottom-lg">
						<h3>✔ Easy to set up</h3>
						<p>
							Installing Server State on your server is a simple as running an
							installer script. (ok, sometimes you'll need to adjust the
							Firewall a little bit, but in that case, you should know what to
							do 😉). After that, you can do configure everything through our
							UI.
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
			<Image src="/static/img/waves/accent-below-1.svg" className="waves top" />
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
								We're using industry standards like NodeJS, React & GraphQL for
								Server State.
							</p>
							<p>
								Server State using standard tech means that both you and we can
								use a lot of tooling that already exists for these standards
								without reinventing the wheel.
							</p>
						</Highlight>
						<Highlight
							title="Well documented"
							image={useBaseUrl('/img/icons/pencil.svg')}
						>
							<p>
								As developers, we know that one of the biggest frustrations when
								integrating into a system is lacking/inaccurate documentation.
							</p>
							<p>
								For that reason, we{' '}
								<strong>
									don't consider documentation to be a "side artifact" but an
									integral part of the product itself
								</strong>
								.
							</p>
						</Highlight>
						<Highlight
							title="Eating our own dogfood"
							image={useBaseUrl('/img/icons/paw.svg')}
						>
							"Eating one's own dog food" refers to using one's products. Since
							we build much of our functionality using the plugin APIs
							ourselves,{' '}
							<strong>
								we want road bumps within our APIs fixed just as much as you do
							</strong>
							.
						</Highlight>
					</div>
				</div>
			</div>
			<Image src="/static/img/waves/accent-above-3.svg" className="waves bottom" />
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
						Server State and its core modules are fully open source (under the
						MIT license) and free to use even in commercial settings. If you
						want to support us, we appreciate all kinds of contributions to our
						project on GitHub:
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
			title={`Hello from ${siteConfig.title}, an open source Server Monitoring solution`}
			description="A free, modular, extensible, open source solution for server monitoring"
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
