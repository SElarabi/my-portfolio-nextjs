/** @format */
'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState, useRef } from 'react';
import {
	AtSymbolIcon,
	UserIcon,
	PencilIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';

import { sendMessage } from '@/app/lib/SendMessage';

const defaultValues = {
	user_name: '',
	user_email: '',
	message: '',
};
const formSchema = z.object({
	user_name: z
		.string()
		.min(5, { message: 'Please Enter Your Name & Last Name' }),
	user_email: z.string().email(),
	message: z.string().min(6, { message: 'Missing MESSAGE ' }),
});
type FormSchema = z.infer<typeof formSchema>;

export default function MessageForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const [submissionStatus, setSubmissionStatus] = useState<{
		success: boolean;
		error: string;
	}>({ success: false, error: '' });
	const {
		register,
		handleSubmit,
		formState: { errors },
		getFieldState,
		setError,
	} = useForm<FormSchema>({
		defaultValues,
		resolver: zodResolver(formSchema),
	});

	const sendEmail: SubmitHandler<FormSchema> = async (data: FormSchema) => {
		// Reset the submission status
		setSubmissionStatus({ success: false, error: '' });
		// wait for submission return
		try {
			let sentStatus = await sendMessage(formRef);
			// Update the submission status based on the result
			setSubmissionStatus(sentStatus);
			// reset form when success is true
			console.log('sentStatus:', sentStatus);
		} catch (error) {
			console.error('Error sending email:', error);
			// Update the submission status in case of an error
			setSubmissionStatus({ success: false, error: 'Error sending email' });
		}
	};

	function SendButton() {
		return (
			<Button
				className='mt-4 w-full'
				type='submit'
				aria-disabled={'false'}
			>
				Send
				<PaperAirplaneIcon className='ml-auto h-5 w-5 text-gray-50' />
			</Button>
		);
	}

	return (
		<>
			{/* FORM SECTION */}
			<div className='container text-center underline'>
				<h6 className='section-title mb-5'>Send Me a Message</h6>

				{/* Contact form */}
				<div className={`${lusitana.className} flex flex-col gap-8`}>
					<section className='section text-start '>
						{/* <!-- contact form --> */}
						<form
							ref={formRef}
							onSubmit={handleSubmit(sendEmail)}
							className='space-y-3'
						>
							<div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8'>
								<div className='w-full'>
									{/* name */}
									<div>
										<label
											className='mb-3 mt-5 block text-xs font-medium text-gray-900'
											htmlFor='text'
										>
											Name
										</label>
										<div className='relative'>
											<input
												{...register('user_name', {
													required: 'REQUIRED',
												})}
												className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black'
												id='name'
												placeholder='Enter your name'
												aria-describedby='customer-error'
											/>

											<UserIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
										</div>

										<div
											id='customer-error'
											aria-live='polite'
											aria-atomic='true'
										>
											{errors.user_name && (
												<p className='mt-2 text-sm text-red-500'>
													{errors.user_name.message}
												</p>
											)}
										</div>

										<div
											id='customer-error'
											aria-live='polite'
											aria-atomic='true'
										></div>
									</div>

									{/* email */}
									<div>
										<label
											className='mb-3 mt-5 block text-xs font-medium text-gray-900 '
											htmlFor='email'
										>
											Email
										</label>

										<div className='relative'>
											<AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
											<input
												{...register('user_email', {
													required: true,
												})}
												className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black'
												id='email'
												placeholder='you@example.com'
												aria-describedby='customer-error'
											/>
										</div>
										<div
											id='customer-error'
											aria-live='polite'
											aria-atomic='true'
										>
											{errors.user_email && (
												<p className='mt-2 text-sm text-red-500'>
													{errors.user_email.message}
												</p>
											)}
										</div>
									</div>
									{/* text area */}

									<label
										className='mb-3 mt-5 block text-xs font-medium text-gray-900'
										htmlFor='textarea'
									>
										Message
									</label>

									<div className='relative'>
										<PencilIcon className='pointer-events-none absolute left-3 top-5 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
										<textarea
											{...register('message', {
												required: true,
											})}
											className='peer block p-2.5 w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-gray-900 bg-gray-50'
											id='textarea'
											name='message'
											rows='16'
											placeholder='Write your message here...'
											aria-describedby='customer-error'
										></textarea>
										{errors.message && (
											<p className='mt-2 text-sm text-red-500'>{errors.message.message}</p>
										)}
									</div>
								</div>
							</div>

							<SendButton />
						</form>

						{/* <!-- end of contact form --> */}
					</section>
				</div>
				{submissionStatus.success ? (
					<div className='text-green-500'>YOUR MESSAGE WAS SENT</div>
				) : submissionStatus.error ? (
					<div className='text-red-500'>{submissionStatus.error}</div>
				) : null}

				{/* Success Message */}
			</div>
			{/* <!-- end of send me message section --> */}
		</>
	);
}
