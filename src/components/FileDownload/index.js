import React from 'react';
import Link from '@docusaurus/Link';
import { DownloadIcon } from './DownloadIcon';

export function FileDownload({ children, file }) {
	const myFile = file.startsWith('/static') ? file.substr(7) : file; // Remove `/static`
	return (
		<a className="block-link" download={true} href={myFile}>
			<span>
				<DownloadIcon /> {children}
			</span>
		</a>
	);
}
