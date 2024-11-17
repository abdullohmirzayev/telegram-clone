import { emailSchema } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/use-auth'

const SignIn = () => {
	const { setEmail, setStep } = useAuth()
	const form = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: { email: '' },
	})

	function onSubmit(values: z.infer<typeof emailSchema>) {
		// API call to sent email
		setStep('verify')
		setEmail(values.email)
	}

	return (
		<div className='w-full'>
			<p className='text-center text-muted-foreground text-sm'>
				Telegram is a messaging app with a focus an speed and security, it`s
				super-fast, simple and free.
			</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<Label>email</Label>
								<FormControl>
									<Input
										placeholder='info@telegram.app'
										className='h-10 bg-secondary'
										{...field}
									/>
								</FormControl>
								<FormMessage className='text-xs text-red-500' />
							</FormItem>
						)}
					/>
					<Button type='submit' className='w-full' size={'lg'}>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default SignIn
