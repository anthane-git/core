import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './Tokens.module.scss';
import { ColorsDark, ColorsLight, Fonts, Spacing } from './sections';

export const Tokens = () => {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout title={siteConfig.title} description="Anthane Core - Design System">
			<div className={styles.wrap}>
				<h1>Tokens</h1>

				<Tabs>
					<TabList className={styles.nav}>
						<Tab className={styles.navItem}>Colors</Tab>
						<Tab className={styles.navItem}>Fonts</Tab>
						<Tab className={styles.navItem}>Spacing</Tab>
					</TabList>

					<table>
						<TabPanel>
							<thead>
								<tr>
									<th>Color Mode</th>
									<th>Color</th>
									<th>Token Name</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<ColorsLight />
								<ColorsDark />
							</tbody>
						</TabPanel>
						<TabPanel>
							<thead>
								<tr>
									<th>Color Mode</th>
									<th>Color</th>
									<th>Token Name</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<Fonts />
							</tbody>
						</TabPanel>
						<TabPanel>
							<thead>
								<tr>
									<th>Color Mode</th>
									<th>Color</th>
									<th>Token Name</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<Spacing />
							</tbody>
						</TabPanel>
					</table>
				</Tabs>
			</div>
		</Layout>
	);
};
