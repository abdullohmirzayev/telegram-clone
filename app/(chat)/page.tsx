import ContactList from './_components/contact-list'

const HomePage = () => {
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
