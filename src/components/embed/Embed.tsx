import React from 'react';

export const Embed = ({ src }) => (
	<section>
		<iframe
			src={`https://anthane-git.github.io/core-elements/${src}`}
			width="100%"
			height="200"
		/>
	</section>
);
