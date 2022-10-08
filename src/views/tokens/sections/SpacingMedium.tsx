import React from 'react';

import { spacing } from '../cache/tokens';
import { ClipboardIcon } from '../../../components';
import { kebabCase } from '../../../helpers';
import styles from '../Tokens.module.scss';

export const SpacingMedium = () => (
	<>
		{Object.entries(spacing.medium).map(([key, value], idx) => (
			<tr key={idx} className={styles.spacing}>
				<td>
					<figure style={{ width: value }} />
				</td>

				<td>
					<span>Medium</span>
				</td>

				<td>
					<span>{key}</span>
				</td>

				<td className={styles.tokenContainer}>
					<span>
						<button
							onClick={() =>
								navigator.clipboard.writeText(
									`--core-spacing-${kebabCase(key)}`
								)
							}>
							<div className={styles.tokenName}>
								<span>--core-spacing-{kebabCase(key)}</span>
							</div>
							<div className={styles.clipboard}>
								<ClipboardIcon />
							</div>
						</button>
					</span>
				</td>

				<td>
					<span>{value}</span>
				</td>
			</tr>
		))}
	</>
);
