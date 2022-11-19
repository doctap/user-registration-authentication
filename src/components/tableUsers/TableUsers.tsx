import React from 'react';
import { Form } from 'react-bootstrap';
import { User } from '../../api/convert-data';
import UserItem from '../userItem/UserItem';
import styles from './TableUsers.module.scss';

interface ITableUsers {
	users: User[];
	checkedAllUsers(isChecked: boolean): void;
	checkedUser(usersId: string): void;
}

export default function TableUsers(props: ITableUsers) {
	return (
		<table className={styles.TableUsers}>
			<thead>
				<tr>
					<td><Form.Check type="checkbox" onChange={(e) => props.checkedAllUsers(e.currentTarget.checked)} /></td>
					<td>идентификатор</td>
					<td>именем</td>
					<td>мылом</td>
					<td>датой регистрации</td>
					<td>датой последнего логина</td>
					<td>статусом</td>
				</tr>
			</thead>
			<tbody>
				{
					props.users.map(u =>
						<UserItem
							isChecked={u.isChecked}
							getUserId={props.checkedUser}
							key={u.id}
							firstName={u.firstName}
							lastName={u.lastName}
							email={u.email}
							id={u.id}
							lastLogin={u.lastLogin}
							registrationDate={u.registrationDate}
							status={u.status}
						/>
					)}
			</tbody>
		</table>
	)
}
