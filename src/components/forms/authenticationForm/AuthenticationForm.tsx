import React, { FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './AuthenticationForm.module.scss';
import { useNavigate } from "react-router-dom";

interface IAuthenticationFormData {
	email: string;
	password: string;
	checkMeOut: boolean;
}

interface IAuthenticationForm {
	getData(data: IAuthenticationFormData): void;
}

let email = '', password = '', checkMeOut = false;

export default function AuthenticationForm(props: IAuthenticationForm) {
	const navigate = useNavigate();

	const submitForm = (event: FormEvent<HTMLFormElement>) => {
		event.stopPropagation();
		event.preventDefault();
		(email && password) && props.getData({ email, password, checkMeOut });
	}

	const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const elem = event.currentTarget;
		email = elem.value;
	}

	const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const elem = event.currentTarget;
		password = elem.value;
	}

	const getConsent = (event: React.ChangeEvent<HTMLInputElement>) => {
		const elem = event.currentTarget;
		checkMeOut = elem.checked;
	}

	const rerouteOnRegistrationForm = () => {
		navigate('/registration')
	}

	return (
		<div className={styles.form}>
			<Form onSubmit={submitForm}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={getEmail} />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" onChange={getPassword} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" onChange={getConsent} />
				</Form.Group>

				<div className={styles.buttons}>
					<Button variant="primary" type="submit" children='Log in' />
					<Button variant="secondary" type="button" children='Go to registration' onClick={rerouteOnRegistrationForm} />
				</div>
			</Form>
		</div>
	)
}
