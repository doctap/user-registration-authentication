import React from 'react';
import RegistrationFrom from '../../forms/registrationForm/RegistrationFrom';
import ContainerPage from '../containerPage/ContainerPage';
import styles from './PageRegistration.module.scss';

export default function PageRegistration() {
	return (
		<ContainerPage variant='contentCenter'>
			<div className={styles.PageRegistration}>
				<RegistrationFrom getData={(data) => console.log(data)} />
			</div>
		</ContainerPage>
	)
}
