import React from 'react';
import styles from './ContainerPage.module.scss';

interface IContainerPage {
	children: React.ReactNode;
}

export default function ContainerPage(props: IContainerPage) {
	return (
		<div className={styles.containerPage}>
			{props.children}
		</div>
	)
}
