import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { HeroBanner } from '../../components';
import styles from './Home.module.scss';

export const Home = (): JSX.Element => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title} description="Anthane Core - Design System">
			<HeroBanner />
			<div className={styles.row}>
				<Link to={'/core/base/intro'}>
					<div className={styles.link}>
						<h2>Core Base</h2>
						<p>Explore Antahne's Brand Foundations</p>
					</div>
				</Link>
				<Link to={'/core/elements/intro'}>
					<div className={styles.link}>
						<h2>Core Elements</h2>
						<p>Explore Anthane's component library</p>
					</div>
				</Link>
				<Link to={'/core/tokens'}>
					<div className={styles.link}>
						<h2>Core Tokens</h2>
						<p>Explore Anthane's design tokens library</p>
					</div>
				</Link>
			</div>
		</Layout>
	);
};
