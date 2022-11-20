import { users } from "../server.ts/Server"

export const getUsers = () => {
	return users;
}

export const deleteUsers = (usersId: string[]) => {
	console.log(usersId, 'deleteUsers')
}

export const blockUsers = (usersId: string[]) => {
	console.log(usersId, 'blockUsers')
}

export const unblockUsers = (usersId: string[]) => {
	console.log(usersId, 'unblockUsers')
}