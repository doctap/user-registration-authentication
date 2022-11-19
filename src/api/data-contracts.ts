
export interface IConvertUserProp {
	isChecked: boolean;
}

export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	status: boolean;
	
	/** @format date-time */
	registrationDate: string;

	/** @format date-time */
	lastLogin: string;
} 