import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export function Image({ src, invertible = false, alt = '', ...args }) {
	const mySrc = src.startsWith('/static') ? src.substr(7) : src; // remove `/static`
	const realSrc = useBaseUrl(mySrc); // prepend base url
	return (
		<>
			{/* <Link /> lets build fail if resource doesn't exist */}
			<Link to={mySrc} style={{ display: 'none' }}>
				Link to {alt}
			</Link>
			<img
				src={realSrc}
				className={invertible ? 'invertible' : ''}
				alt={alt}
				{...args}
			/>
		</>
	);
}
