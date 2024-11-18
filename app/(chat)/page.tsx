'use client'

import ContactList from './_components/contact-list'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AddContact from './_components/add-contact'
import { useCurrentContact } from '@/hooks/use-current'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { emailSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import TopChat from './_components/top-chat'
import Chat from './_components/chat'

const HomePage = () => {
	const { currentContact } = useCurrentContact()
	const router = useRouter()

	const contactForm = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: { email: '' },
	})

	useEffect(() => {
		router.replace('/')
	}, [])

	const onCreateContact = (values: z.infer<typeof emailSchema>) => {
		// API call to create contact
		console.log(values)
	}

	return (
		<div>
			{/* Sidebar */}
			<div className='w-80 h-screen  border-r fixed inset-0 z-50'>
				{/* Loading */}
				{/* <div className='w-full h-[95vh] flex justify-center items-center'>
					<Loader2 size={50} className='animate-spin' />
				</div> */}

				{/* contact list */}
				<ContactList contacts={contacts} />
			</div>
			{/* chat area */}
			<div className='pl-80 w-full'>
				{/* Add contact */}
				{!currentContact?._id && (
					<AddContact
						contactForm={contactForm}
						onCreateContact={onCreateContact}
					/>
				)}
				{/* Chat */}
				{currentContact?._id && (
					<div className='w-full relative'>
						{/* Top chat */}
						<TopChat />
						{/* Chat messages */}
						<Chat />
					</div>
				)}
			</div>
		</div>
	)
}

const contacts = [
	{
		email: 'john@gmail.com',
		_id: '1',
		avatar: 'https://github.com/shadcn.png',
	},
	{
		email: 'karim@gmail.com',
		_id: '2',
		avatar: 'https://github.com/shadcn.png',
	},
	{
		email: 'sardor@gmail.com',
		_id: '3',
		avatar: 'https://github.com/shadcn.png',
	},
	{
		email: 'josh@gmail.com',
		_id: '4',
		avatar: 'https://github.com/shadcn.png',
	},
]

export default HomePage
