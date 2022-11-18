import React from 'react'
import AuthenticationForm from '../../forms/authenticationForm/AuthenticationForm';
import ContainerPage from '../containerPage/ContainerPage';

export default function PageAuthentication() {
	return (
		<ContainerPage>
			<AuthenticationForm getData={(data) => console.log(data)} />
		</ContainerPage>
	)
}


