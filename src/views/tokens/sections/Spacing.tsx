import React from 'react';

import { spacing } from '../cache/tokens';
import { ClipboardIcon } from '../../../components';
import { kebabCase } from '../../../helpers';
import styles from '../Tokens.module.scss';

export const Spacing = () => (
	<>
		{Object.entries(spacing).map(([key, value], idx) => (
			<tr key={idx}>
				<div>
					<span>{key}</span>
				</div>
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
					{Object.entries(value).map(([key, value], idx) => (
						<div key={idx}>
							<figure style={{ background: value }} />
							{key} | {value}
						</div>
					))}
				</td>
			</tr>
		))}
	</>
);
