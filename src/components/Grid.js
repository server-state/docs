import React from 'react';

/**
 *
 * @param {object} props The props
 * @param {number} [props.cols = 2] The number of columns
 */
export function Grid({ cols = 2, children }) {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${cols}, 1fr)`,
				columnGap: '1em'
			}}
		>
			{children}
		</div>
	);
}
