import React, { useEffect, useState } from 'react';
import { User } from '../../../api/data-contracts';
import { blockUsers, deleteUsers, getUsers, unblockUsers } from '../../../api/http-client';
import TableManager, { Actions } from '../../tableManager/TableManager';
import TableUsers from '../../tableUsers/TableUsers';
import ContainerPage from '../containerPage/ContainerPage';

export default function PageHome() {
	const [users, setUsers] = useState<User[]>([]);

	const checkedAll = (isChecked: boolean) => {
		const items = [...users]
		items.forEach(it => isChecked ? it.isChecked = true : it.isChecked = false)
		setUsers(items)
	}

	const checkedUser = (id: number) => {
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
				blockUsers(usersId).then(x => setUsers(x));
				break;
			case 'unblock':
				unblockUsers(usersId).then(x => setUsers(x));
				break;
			case 'delete':
				deleteUsers(usersId).then(x => setUsers(x));
				break;
		}
	}

	useEffect(() => {
		getUsers().then(x => setUsers(x))
	}, [])

	return (
		<ContainerPage variant='padding2rem'>
			<TableManager getAction={getAction} />
			<TableUsers checkedAllUsers={checkedAll} checkedUser={checkedUser} users={users} />
		</ContainerPage>
	)
}