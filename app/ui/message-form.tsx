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
import { Alert } from '@/app/ui/alert';
import { sendEmailJs } from '../lib/actions';

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
	const defaultSendStatus = { success: false, error: '', message: '' };
	const formRef = useRef<HTMLFormElement>(null);
	const [submissionStatus, setSubmissionStatus] = useState<{
		success: boolean;
		error: string;
		message: string;
	}>(defaultSendStatus);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormSchema>({
		defaultValues,
		resolver: zodResolver(formSchema),
	});
	const sendEmail: SubmitHandler<FormSchema> = async (data: FormSchema) => {
		console.log(data);
		// Reset the submission status
		setSubmissionStatus(defaultSendStatus);
		// wait for submission return
		// let returnStatus = await sendEmailJs(data);
		try {
			let sentStatus = await sendEmailJs(data);
			// Update the submission status based on the result
			setSubmissionStatus((prev) => sentStatus);
			// reset form when success is true and set display success message in timer
			if (sentStatus.success) {
				reset(defaultValues);
				setTimeout(() => {
					setSubmissionStatus(defaultSendStatus);
				}, 5000);
			}
			console.log('sentStatus:', sentStatus);
		} catch (error) {
			console.error('Error sending email:', error);
			// Update the submission status in case of an error
			setSubmissionStatus({
				success: false,
				error: `${error}`,
				message: submissionStatus.message,
			});
		}
		// reset form when success is true
		if (submissionStatus.success) reset(defaultValues);
	};

	useEffect(() => {
		// reset form when success is true
		if (submissionStatus.success) {
			reset(defaultValues);
			setSubmissionStatus(defaultSendStatus);
		}
		console.log('submissionStatus :', submissionStatus);
	}, []);

	function SendButton() {
		let isDesabled = false;
		return (
			<Button
				className='mt-4 w-full'
				type={!submissionStatus.success ? 'submit' : 'reset'}
				aria-disabled={submissionStatus.success ? 'true' : 'false'}
			>
				Send
				<PaperAirplaneIcon className='ml-auto h-5 w-5 text-gray-50' />
			</Button>
		);
	}

	function ClearFormButton() {
		return (
			<Button
				className='mt-4 w-full'
				type='submit'
				aria-disabled={'false'}
				onClick={() => {
					reset(defaultValues);
					setSubmissionStatus(defaultSendStatus);
				}}
			>
				CLEAR FORM
				<PaperAirplaneIcon className='ml-auto h-5 w-5 text-gray-50' />
			</Button>
		);
	}

	return (
		<div className='container text-center underline w-full'>
			<h6 className='section-title mb-5'>Send Me a Message</h6>

			{/* Contact form */}
			<div className={`${lusitana.className} flex flex-col gap-8`}>
				<section className='section text-start '>
					{/* <!-- contact form --> */}
					<form
						ref={formRef}
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit(sendEmail)();
						}}
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
										rows={16}
										placeholder='Write your message here...'
										aria-describedby='customer-error'
									></textarea>
									{errors.message && (
										<p className='mt-2 text-sm text-red-500'>{errors.message.message}</p>
									)}
								</div>
							</div>
						</div>

						{(!submissionStatus.message && !submissionStatus.success) ||
						submissionStatus.error ? (
							<SendButton />
						) : (
							<ClearFormButton />
						)}
					</form>

					{/* <!-- end of contact form --> */}
				</section>
			</div>
			{submissionStatus.success ? (
				<Alert
					type='success'
					message='YOU MESSAGE WAS SUCCESFULLY SENT, THNAMK YOU FOR YOUR EMAIL MESSAGE'
				/>
			) : submissionStatus.error ? (
				<Alert
					type='error'
					message={submissionStatus.error}
				/>
			) : submissionStatus.message ? (
				<Alert
					type='error'
					message='There was a connectivity issue while attempting to send your message.'
				/>
			) : null}
		</div>
		// {/* <!-- end of send me message section --> */}
	);
}
