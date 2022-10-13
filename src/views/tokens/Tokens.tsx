import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './Tokens.module.scss';
import * as tokens from './cache/tokens';
import { Colors, Fonts, Spacing } from './sections';

export const Tokens = () => {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout title={siteConfig.title} description="Anthane Core - Design System">
			<div className={styles.wrap}>
				<h1>🏷️ Tokens</h1>
				<Tabs>
					<TabList className={styles.nav}>
						{Object.keys(tokens).map((key, idx) => (
							<Tab
								key={idx}
								className={styles.navItem}
								selectedClassName={styles.activeTab}>
								{key}
							</Tab>
						))}
					</TabList>

					<table className={styles.colors}>
						<TabPanel>
							<thead>
								<tr>
									<th style={{ width: '20%' }}>Color Mode</th>
									<th style={{ width: '30%' }}>Color</th>
									<th style={{ width: '30%' }}>Token Name</th>
									<th style={{ width: '20%' }}>Value</th>
								</tr>
							</thead>
							<tbody>
								<Colors mode={'light'} />
								<Colors mode={'dark'} />
							</tbody>
						</TabPanel>
					</table>

					<table className={styles.fonts}>
						<TabPanel>
							<thead>
								<tr>
									<th style={{ width: '30%' }}>Preview</th>
									<th style={{ width: '30%' }}>Token Name</th>
									<th style={{ width: '10%' }}>Font Family</th>
									<th style={{ width: '10%' }}>Font Size</th>
									<th style={{ width: '10%' }}>Font Weight</th>
									<th style={{ width: '10%' }}>Line Height</th>
								</tr>
							</thead>
							<tbody>
								<Fonts />
							</tbody>
						</TabPanel>
					</table>

					<table className={styles.spacing}>
						<TabPanel>
							<thead>
								<tr>
									<th style={{ width: '10%' }}>Group</th>
									<th style={{ width: '40%' }}>Preview</th>
									<th style={{ width: '10%' }}>Size</th>
									<th style={{ width: '30%' }}>Token Name</th>
									<th style={{ width: '10%' }}>Value</th>
								</tr>
							</thead>
							<tbody>
								<Spacing mode={'small'} />
								<Spacing mode={'medium'} />
								<Spacing mode={'large'} />
							</tbody>
						</TabPanel>
					</table>
				</Tabs>
			</div>
		</Layout>
	);
};
