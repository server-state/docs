import React from 'react';
import Link from '@docusaurus/Link';

export function Reference({ children, to }) {
	// const niceTo = to.startsWith('http')
	// 	? to
	// 	: new URL(to, location.href).pathname;
	const realTo = to.endsWith('.mdx') ? to.substr(0, to.length - 4) : to; // remove `.mdx` extension

	return (
		<Link to={realTo} className="block-link">
			<span>{children} »</span>
			<span>{realTo}</span>
		</Link>
	);
}
