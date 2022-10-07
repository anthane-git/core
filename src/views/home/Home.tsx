import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { HeroBanner } from '../../components';

export const Home = (): JSX.Element => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title} description="Anthane Core - Design System">
			<HeroBanner />
			<div>
				Explore Core Usage
				<Link to={'/getting-started'}>Getting Stareted</Link>
			</div>
		</Layout>
	);
};
