import { IConvertUserProp, IUser } from "./data-contracts"

export type User = IUser & IConvertUserProp;

export const convertUsers = (items: IUser[]) => items.map(u => ({ ...u, isChecked: false }));