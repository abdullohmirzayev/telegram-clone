import MessageCard from '@/components/cards/message.card'

const Chat = () => {
	return (
		<div className='flex flex-col justify-end z-40 min-h-[92vh]'>
			{/* Loading */}
			{/* <ChatLoading /> */}
			{/* Messages */}
			<MessageCard isReceived />
			
			{/* Message input */}
		</div>
	)
}

export default Chat