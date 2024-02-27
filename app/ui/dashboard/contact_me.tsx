/** @format */

'use client';

import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import { useFormState, useFormStatus } from 'react-dom';
import {
	AtSymbolIcon,
	KeyIcon,
	UserIcon,
	PencilIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

export default function ContactMe() {
	function SendButton() {
		const { pending } = useFormStatus();
		return (
			<Button
				className='mt-4 w-full'
				aria-disabled={pending}
			>
				Send
				<PaperAirplaneIcon className='ml-auto h-5 w-5 text-gray-50' />
			</Button>
		);
	}
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.overlay}></div>
				<div className={styles[`header-content`]}>
					{/* - title */}

					<div className={styles['about-img-holder']}>
						<img
							src='/fse_profile01.png'
							className={`${styles[`about-img`]} rounded-full`}
							alt='my_Pic'
						/>
					</div>
				</div>
			</header>
			{/* FORM SECTION */}
			<section className='section'>
				<div className='container text-center underline'>
					<h6 className='section-title mb-5'>Send Me a Message</h6>

					{/* Contact form */}
					<div className={`${lusitana.className} flex flex-col gap-8`}>
						<section className='section  '>
							{/* <!-- contact form --> */}
							<form
								action='submit'
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
													className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black'
													id='email'
													type='text'
													name='textl'
													placeholder='Enter your name'
													required
												/>
												<UserIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
											</div>
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
													className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black'
													id='email'
													type='email'
													name='email'
													placeholder='you@example.com'
													required
												/>
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
												className='peer block p-2.5 w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-gray-900 bg-gray-50'
												id='textarea'
												rows='16'
												name='textarea'
												placeholder='Write your message here...'
												required
											></textarea>
										</div>
									</div>
								</div>
								<SendButton />
							</form>

							{/* <!-- end of contact form --> */}

							{/* <!-- end of container --> */}
						</section>
						<div
							id='success-message'
							className='alert alert-success'
							style={{ display: 'none' }}
						>
							Your message has been sent successfully.
						</div>
						{/* <!-- end of send me message section --> */}
					</div>

					{/* Success Message */}
					<div
						id='success-message'
						className='alert alert-success'
						style={{ display: 'none' }}
					>
						Your message has been sent successfully.
					</div>
				</div>
			</section>
		</div>
	);
}
