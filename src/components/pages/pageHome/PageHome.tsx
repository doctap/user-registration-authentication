import React, { useState } from 'react';
import { convertUsers, User } from '../../../api/convert-data';
import { blockUsers, deleteUsers, getUsers, unblockUsers } from '../../../api/http-client';
import TableManager, { Actions } from '../../tableManager/TableManager';
import TableUsers from '../../tableUsers/TableUsers';
import ContainerPage from '../containerPage/ContainerPage';

export default function PageHome() {

	const [users, setUsers] = useState<User[]>(convertUsers(getUsers()));

	const checkedAll = (isChecked: boolean) => {
		const items = [...users]
		items.forEach(it => isChecked ? it.isChecked = true : it.isChecked = false)
		setUsers(items)
	}

	const checkedUser = (id: string) => {
		const foundItem = users.find(it => it.id === id);

		if (foundItem === undefined) {
			console.warn('item is exists but an item not found by id')
			return;
		}

		foundItem.isChecked = !foundItem.isChecked;
		setUsers([...users])
	}

	const getAction = (action: Actions) => {
		const usersId = users
			.filter(u => u.isChecked === true)
			.map(u => u.id);

		if (usersId.length === 0)
			return;

		switch (action) {
			case 'block':
				blockUsers(usersId);
				break;
			case 'unblock':
				unblockUsers(usersId);
				break;
			case 'delete':
				deleteUsers(usersId);
				break;
		}
	}

	return (
		<ContainerPage variant='padding2rem'>
			<TableManager getAction={getAction} />
			<TableUsers checkedAllUsers={checkedAll} checkedUser={checkedUser} users={users} />
		</ContainerPage>
	)
}