import React from 'react';

import { font } from '../cache/tokens';

export const Fonts = () => (
	<>
		{Object.entries(font).map(([key, value], idx) => (
			<tr key={idx}>
				<div>{key}</div>
				<span>
					{value.font} | {value.size} | {value.weight}
				</span>
			</tr>
		))}
	</>
);
