import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}

export interface IError extends Error {
	response: { data: { message: string } }
}

export interface IUser {
	email: string
	_id: string
	avatar: string
	firstName: string
	lastName: string
	bio: string
	isVerified: boolean
	muted: boolean
	notificationSound: string
	sendingSound: string
	contacts: IUser[]
}
