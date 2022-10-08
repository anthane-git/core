import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './Tokens.module.scss';
import * as tokens from './cache/tokens';
import { ColorsDark, ColorsLight, Fonts, SpacingSmall } from './sections';
import { SpacingMedium } from './sections/SpacingMedium';
import { SpacingLarge } from './sections/SpacingLarge';

export const Tokens = () => {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout title={siteConfig.title} description="Anthane Core - Design System">
			<div className={styles.wrap}>
				<h1>Tokens</h1>

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
									<th>Preview</th>
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
									<th>Preview</th>
									<th>Group</th>
									<th>Token Name</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<SpacingSmall />
								<SpacingMedium />
								<SpacingLarge />
							</tbody>
						</TabPanel>
					</table>
				</Tabs>
			</div>
		</Layout>
	);
};
