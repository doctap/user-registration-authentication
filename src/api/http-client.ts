import { AxiosResponse } from "axios";
import { IUser, ConverseResponse, IRegistrationData, IAuthenticationData, isSucceeded } from "./data-contracts";
import { convertUsers } from "../utils/Utils";
import { API_CONFIG } from "../utils/configs/axiosConfig";

const serveUrl = 'http://localhost:8000';
//'https://user-manager-server-git-main-doctap.vercel.app'

export async function getUsers() {
	const res = await API_CONFIG.get<IUser[]>(`${serveUrl}/api/users`)
	return convertUsers(res.data)
}

export async function deleteUsers(usersId: number[]) {
	const res = await API_CONFIG.delete<any, AxiosResponse<ConverseResponse>, number[]>(`${serveUrl}/delete-users`, {
		headers: { 'Content-Type': 'application/json' },
		data: usersId,
	});
	return convertUsers(res.data[0]);
}

export async function blockUsers(usersId: number[]) {
	const res = await API_CONFIG.post<number[], AxiosResponse<ConverseResponse>>(`${serveUrl}/block-users`, { usersId });
	return convertUsers(res.data[0]);
}

export async function unblockUsers(usersId: number[]) {
	const res = await API_CONFIG.post<number[], AxiosResponse<ConverseResponse>>(`${serveUrl}/unblock-users`, { usersId });
	return convertUsers(res.data[0]);
}

export async function registrationUser(userData: IRegistrationData) {
	const res = await API_CONFIG.post<IRegistrationData, AxiosResponse<isSucceeded>>(`${serveUrl}/registration`, userData);
	return res.data;
}

export async function authenticationUser(userData: IAuthenticationData) {
	const res = await API_CONFIG.post<IAuthenticationData, AxiosResponse<isSucceeded>>(`${serveUrl}/authentication`, userData);
	return res.data;
}