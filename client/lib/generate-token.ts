'use server'

import jwt from 'jsonwebtoken'

export const generateToken = async (userId?: string) => {
	const token = jwt.sign({ userId }, process.env.NEXT_PUBLICJWT_SECRET!, {
		expiresIn: '1m',
	})
	return token
}
