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
				<div className={styles.link}>
					<h2>Explore Core Usage</h2>
					<p>
						Color is critical part of our brand being immediately recognizable,
						customers.
					</p>
					<Link to={'/getting-started'}>Getting Stareted</Link>
				</div>
				<div className={styles.link}>
					<h2>Explore Core Usage</h2>
					<p>
						Color is critical part of our brand being immediately recognizable,
						customers.
					</p>
					<Link to={'/getting-started'}>Getting Stareted</Link>
				</div>
			</div>
		</Layout>
	);
};
