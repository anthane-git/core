import React from 'react';

import { spacing } from '../cache/tokens';

export const Spacing = () => (
	<>
		{Object.entries(spacing).map(([key, value], idx) => (
			<tr key={idx}>
				<div>
					<span>{key}</span>
				</div>
				{Object.entries(value).map(([key, value], idx) => (
					<div key={idx}>
						{key} | {value}
					</div>
				))}
			</tr>
		))}
	</>
);
