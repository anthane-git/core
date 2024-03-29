import React from 'react';
import styles from './Clipboard.module.scss';

export const ClipboardIcon = () => (
	<svg
		viewBox="0 0 20 20"
		className={styles.icon}
		style={{ width: '14px', height: '14px' }}>
		<path d="M15 2a1 1 0 0 1 1 1v13.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-13.5a1 1 0 1 1 2 0v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a1 1 0 0 1 1-1zm-4 2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z"></path>
	</svg>
);
