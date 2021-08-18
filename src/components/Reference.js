import React from 'react';
import Link from '@docusaurus/Link';

export function Reference({ children, to }) {
	// const niceTo = to.startsWith('http')
	// 	? to
	// 	: new URL(to, location.href).pathname;

	return (
		<Link to={to} className="block-link">
			<span>{children} »</span>
			<span>{to}</span>
		</Link>
	);
}
