import React from 'react';
import AuthenticationForm from './components/forms/authenticationForm/AuthenticationForm';
import styles from './App.module.scss';
import RegistrationFrom from './components/forms/registrationForm/RegistrationFrom';

function App() {



	return (
		<div className={styles.App}>
			{/* <div className={styles.authenticationForm}>
				<AuthenticationForm  getData={(data) => console.log(data)} />
			</div> */}

			<div className={styles.registrationFrom}> 
				<RegistrationFrom getData={(data) => console.log(data)} />
			</div>
		</div>
	);
}

export default App;
