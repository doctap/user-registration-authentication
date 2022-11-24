export interface IConvertUserProp {
	isChecked: boolean;
}

export type User = IUser & IConvertUserProp;
export type ConverseResponse = [IUser[], any];

export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	isBlocked: boolean;

	/** @format date-time */
	registrationDate: string;

	/** @format date-time */
	lastLogin: string;
}