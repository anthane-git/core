import React from 'react';

import { spacing } from '../cache/tokens';
import { ClipboardIcon } from '../../../components';
import { kebabCase } from '../../../helpers';
import styles from '../Tokens.module.scss';

interface Props {
	mode: 'small' | 'medium' | 'large';
}

export const Spacing = ({ mode }: Props) => (
	<>
		{Object.entries(spacing[mode]).map(([key, value], idx) => (
			<tr key={idx} className={styles.spacing}>
				<td width={'10%'}>
					<span style={{ textTransform: 'capitalize' }}>{mode}</span>
				</td>
				<td width={'40%'}>
					<figure style={{ width: value }} />
				</td>
				<td width={'10%'}>
					<span>{key}</span>
				</td>
				<td width={'30%'} className={styles.tokenContainer}>
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

				<td width={'10%'}>
					<span>{value}</span>
				</td>
			</tr>
		))}
	</>
);
