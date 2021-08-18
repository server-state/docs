import React from 'react';
import { DownloadIcon } from './DownloadIcon';

export function FileDownload({ children, file }) {
	return (
		<a className="block-link" download={true} href={file}>
			<span>
				<DownloadIcon /> {children}
			</span>
		</a>
	);
}
