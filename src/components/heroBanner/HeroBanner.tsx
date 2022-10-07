import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import clsx from 'clsx';

import styles from './HeroBanner.module.scss';

export const HeroBanner = (): JSX.Element => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
			</div>
		</header>
	);
};
