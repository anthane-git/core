import React from 'react';

import { colors } from '../cache/tokens';
import { ClipboardIcon } from '../../../components';
import { kebabCase } from '../../../helpers';
import styles from '../Tokens.module.scss';

export const ColorsLight = () => (
	<>
		{Object.entries(colors.light).map(([key, value], idx) => (
			<tr key={idx}>
				<td>
					<h4>Light</h4>
				</td>
				<td>
					<figure style={{ background: value }} />
				</td>
				<td className={styles.tokenContainer}>
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
				<td>
					<p>{value}</p>
				</td>
			</tr>
		))}
	</>
);
