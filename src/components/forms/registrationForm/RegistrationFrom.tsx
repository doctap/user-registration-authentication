import React, { FormEvent } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from './RegistrationFrom.module.scss';

interface IRegistrationFromData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

interface IRegistrationFrom {
	getData(data: IRegistrationFromData): void;
}

let firstName = '', lastName = '', email = '', password = '', proofPassword = '';

export default function RegistrationFrom(props: IRegistrationFrom) {
	const submitForm = (event: FormEvent<HTMLFormElement>) => {
		event.stopPropagation();
		event.preventDefault();

		if (firstName && lastName && email && password === proofPassword)
			props.getData({ firstName, lastName, email, password });
	}

	const getFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const elem = event.currentTarget;
		firstName = elem.value;
	}
	const getLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const elem = event.currentTarget;
		lastName = elem.value;
	}
	const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const elem = event.currentTarget;
		email = elem.value;
	}
	const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const elem = event.currentTarget;
		password = elem.value;
	}
	const getProofPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const elem = event.currentTarget;
		proofPassword = elem.value;
	}

	return (
		<div className={styles.form}>
			<Form onSubmit={submitForm}>
				<Form.Group className="mb-2">
					<Form.Label className="mb-1">What is your name?</Form.Label>
					<Row className="mb-2" >
						<Col>
							<Form.Control type="text" placeholder="first name" onChange={getFirstName} />
						</Col>
						<Col>
							<Form.Control type="text" placeholder="last name" onChange={getLastName} />
						</Col>
					</Row>
					<Form.Label className="mb-1">Email address</Form.Label>
					<Form.Control type="email" placeholder="email" onChange={getEmail} />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label className="mb-1">Password</Form.Label>
					<Row>
						<Col>
							<Form.Control type="password" placeholder="password" onChange={getPassword} />
						</Col>
						<Col>
							<Form.Control type="password" placeholder="retype the password" onChange={getProofPassword} />
						</Col>
					</Row>
				</Form.Group>

				<div className={styles.buttons}>
					<Button variant="secondary" type="button">Back to log in</Button>
					<Button variant="primary" type="submit">Sign up</Button>
				</div>
			</Form>
		</div>
	)
}
