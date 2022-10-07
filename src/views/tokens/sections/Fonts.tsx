import React from 'react';

import { ClipboardIcon } from '../../../components';
import { kebabCase } from '../../../helpers';
import styles from '../Tokens.module.scss';
import { font } from '../cache/tokens';

export const Fonts = () => (
	<>
		{Object.entries(font).map(([key, value], idx) => (
			<tr key={idx}>
				<div
					style={{
						fontFamily: value.font,
						fontSize: value.size,
						fontWeight: value.weight,
					}}>
					Aa
				</div>
				<td className={styles.tokenContainer}>
					<span>
						<button
							onClick={() =>
								navigator.clipboard.writeText(`--core-text-${kebabCase(key)}`)
							}>
							<div className={styles.tokenName}>
								<span>--core-text-{kebabCase(key)}</span>
							</div>
							<div className={styles.clipboard}>
								<ClipboardIcon />
							</div>
						</button>
					</span>
				</td>
				<span>
					{value.font} | {value.size} | {value.weight}
				</span>
			</tr>
		))}
	</>
);
