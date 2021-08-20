import React from 'react';
import styles from './colors.module.css';

export function Colors({ colors }) {
	return (
		<div className={styles.ColorWrapper}>
			{colors.map(color => (
				<div
					key={color.hex}
					className={styles.Color}
					style={{
						background: color.hex,
						color: color.text
					}}
				>
					{color.hex}
				</div>
			))}
		</div>
	);
}
