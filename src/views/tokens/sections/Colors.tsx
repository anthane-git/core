import React from 'react';

import { colors, font, spacing } from '../cache/tokens';
import { ClipboardIcon } from '../../../components';
import { kebabCase } from '../../../helpers';
import styles from '../Tokens.module.scss';

interface Props {
	mode: 'light' | 'dark';
}

export const Colors = ({ mode }: Props) => (
	<>
		{Object.entries(colors[mode]).map(([key, value], idx) => (
			<tr key={idx}>
				<td width={'20%'}>
					<h4>{mode === 'dark' ? 'Dark' : 'Light'}</h4>
				</td>
				<td width={'30%'}>
					<figure style={{ background: value }} />
				</td>
				<td width={'30%'} className={styles.tokenContainer}>
					<span>
						<button
							onClick={() =>
								navigator.clipboard.writeText(`--core-color-${kebabCase(key)}`)
							}>
							<div className={styles.tokenName}>
								<span>--core-color-{kebabCase(key)}</span>
							</div>
							<div className={styles.clipboard}>
								<ClipboardIcon />
							</div>
						</button>
					</span>
				</td>
				<td width={'20%'}>
					<p>{value}</p>
				</td>
			</tr>
		))}
	</>
);
