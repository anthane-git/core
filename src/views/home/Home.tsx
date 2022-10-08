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
				<Link to={'/getting-started/designers'}>
					<div className={styles.link}>
						<h2>For Designers</h2>
						<p>Color is critical part of our brand being immediately</p>
					</div>
				</Link>
				<Link to={'/getting-started/developers'}>
					<div className={styles.link}>
						<h2>For Developer</h2>
						<p>Color is critical part of our brand being immediately</p>
					</div>
				</Link>
				<Link to={'/getting-started/product-managers'}>
					<div className={styles.link}>
						<h2>For Product Managers</h2>
						<p>Color is critical part of our brand being immediately</p>
					</div>
				</Link>
			</div>
		</Layout>
	);
};
