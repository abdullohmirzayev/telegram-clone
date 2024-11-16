import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Social = () => {
	return (
		<div className='grid grid-cols-2 w-full gap-1'>
			<Button variant={'default'}>
				<span>Sign up with google</span>
				<FaGoogle />
			</Button>
			<Button variant={'ghost'}>
				<span>Sign up with github</span>
				<FaGithub />
			</Button>
		</div>
	)
}

export default Social
