import React from 'react'
import AuthenticationForm from '../../forms/authenticationForm/AuthenticationForm';
import ContainerPage from '../containerPage/ContainerPage';
import styles from './PageAuthentication.module.scss';

export default function PageAuthentication() {
	return (
		<ContainerPage variant={'contentCenter'}>
			<div className={styles.PageAuthentication}>
				<AuthenticationForm getData={(data) => console.log(data)} />
			</div>
		</ContainerPage>
	)
}


