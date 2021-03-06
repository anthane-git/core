import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HeroBanner } from '@site/src/components';
import Layout from '@theme/Layout';
import React from 'react';

export default (): JSX.Element => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title} description="Anthane Core - Design System">
			<HeroBanner />
		</Layout>
	);
};
