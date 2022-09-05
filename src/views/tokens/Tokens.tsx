import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

export const Tokens = () => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title} description="Anthane Core - Design System">
			<h1>Tokens</h1>
		</Layout>
	);
};
