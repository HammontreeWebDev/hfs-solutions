import React from 'react';
import { useState } from 'react';
import styles from '../../styles/CarouselButtonStyles.module.css';

export function CarbonNextFilled(props) {
const [fillColor, setFillColor] = useState("#ffffff");
const [secondaryFill, setSecondaryFill] = useState("none");

const handleMouseEnter = () => {
	setFillColor("var(--primary5)");
	setSecondaryFill("#FFFFFF");
}

const handleMouseLeave = () => {
	setFillColor("#FFFFFF");
	setSecondaryFill("none");
}

	return (
		<svg
			className={styles.btnStyle}
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 32 32" {...props}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<path fill={fillColor} d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z"></path>
			<path fill={secondaryFill} d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"></path>
		</svg>);
}