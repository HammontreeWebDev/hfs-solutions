import React from 'react';
import styles from '../../styles/CarouselButtonStyles.module.css';

export function CarbonPreviousFilled(props) {
	return (<svg className={styles.btnStyle} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}><path fill="#ffffff" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24Z"></path><path fill="none" d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8z"></path></svg>);
}