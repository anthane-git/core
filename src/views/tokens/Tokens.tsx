import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { metadata } from '@anthane/core-tokens';
import Layout from '@theme/Layout';

export const Tokens = () => {
	const { siteConfig } = useDocusaurusContext();

	type PropObj = {
		value: string;
		description?: string;
	};

	return (
		<Layout title={siteConfig.title} description="Anthane Core - Design System">
			<h1>Tokens</h1>

			{Object.keys(metadata).map((key, index) => (
				<div key={index}>
					<h3>{key}</h3>
					<div>
						{Object.values(metadata[key]).map((property: PropObj, index) => (
							<div key={index}>
								<p>{property.value}</p>
								<p>{property.description}</p>
							</div>
						))}
					</div>
				</div>
			))}
		</Layout>
	);
};
