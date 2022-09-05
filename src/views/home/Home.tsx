import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HeroBanner } from '@site/src/components';
import Layout from '@theme/Layout';
import React from 'react';

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
