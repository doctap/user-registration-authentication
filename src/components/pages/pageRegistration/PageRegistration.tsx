import React from 'react';
import RegistrationFrom from '../../forms/registrationForm/RegistrationFrom';
import ContainerPage from '../containerPage/ContainerPage';

export default function PageRegistration() {
	return (
		<ContainerPage>
			<RegistrationFrom getData={(data) => console.log(data)} />
		</ContainerPage>
	)
}
