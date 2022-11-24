import React from 'react'
import { Form } from 'react-bootstrap'
import { IUser } from '../../api/data-contracts'

interface IUserItem {
	getUserId(id: number): void;
	isChecked: boolean;
}

export default function UserItem(props: IUser & IUserItem) {
	return (
		<tr>
			<td>
				<Form.Check type="checkbox" checked={props.isChecked} onChange={() => props.getUserId(props.id)} />
			</td>
			<td>{props.id}</td>
			<td>{`${props.firstName} ${props.lastName}`}</td>
			<td>{props.email}</td>
			<td>{props.registrationDate}</td>
			<td>{props.lastLogin}</td>
			<td>{props.isBlocked ? 'blocked' : 'active'}</td>
		</tr>
	)
}