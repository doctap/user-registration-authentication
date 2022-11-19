import React, { useEffect, useState } from 'react';
import { convertUsers, User } from '../../../api/convert-data';
import { getUsers } from '../../../api/http-client';
import TableUsers from '../../tableUsers/TableUsers';
import ContainerPage from '../containerPage/ContainerPage';

export default function PageHome() {

	const [users, setUsers] = useState<User[]>([]);

	const checkedAll = (isChecked: boolean) => {
		const copy = [...users]
		copy.forEach(it => isChecked ? it.isChecked = true : it.isChecked = false)
		setUsers(copy)
	}

	const checkedUser = (id: string) => {
		const copy = [...users]
		copy.forEach(u => u.id === id && (u.isChecked = !u.isChecked))
		setUsers(copy)
	}

	useEffect(() => {
		setUsers(convertUsers(getUsers()))
	}, [])

	return (
		<ContainerPage variant='padding2rem'>
			<TableUsers checkedAllUsers={checkedAll} checkedUser={checkedUser} users={users} />
		</ContainerPage>
	)
}
