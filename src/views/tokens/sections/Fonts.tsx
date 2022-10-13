import React from 'react';

import { ClipboardIcon } from '../../../components';
import { kebabCase } from '../../../helpers';
import styles from '../Tokens.module.scss';
import { font } from '../cache/tokens';

export const Fonts = () => (
	<>
		{Object.entries(font).map(([key, value], idx) => (
			<tr key={idx}>
				<td width={'30%'}>
					<div
						style={{
							fontFamily: value.font,
							fontSize: value.size,
							fontWeight: value.weight,
						}}>
						AaZz
					</div>
				</td>
				<td width={'30%'} className={styles.tokenContainer}>
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
				<td width={'10%'}>{value.font}</td>
				<td width={'10%'}>{value.size}</td>
				<td width={'10%'}>{value.weight}</td>
				<td width={'10%'}>-</td>
			</tr>
		))}
	</>
);
