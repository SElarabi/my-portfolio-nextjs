/** @format */
'use client';
import Contacttag from '@/app/ui/dashboard/contact-tag';
import PortfolioCards from '@/app/ui/dashboard/portfolio-cards';

import {
	AtSymbolIcon,
	KeyIcon,
	UserIcon,
	PencilIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { dispUserInput } from './lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { SubmitButton } from './ui/submit-button';
import { useEffect, useState } from 'react';
type UserField = {
	userInput?: string | { userInput: string } | null;
	errors?: {};
	message?: string | { userInput: string } | null;
};

const initialState = { errors: {}, message: null };

export default function DisplayUserInput() {
	const [count, setCount] = useState(0);

	const [state, dispatch] = useFormState(dispUserInput, initialState);
	// console.log('useFormStatus ', useFormStatus);

	console.log('state ', state);
	useEffect(() => {
		console.log('count ===> ', count);
		// Update count each time the component renders
		setCount((prevCount) => prevCount + 1);
	}, []); // Empty dependency array ensures this effect runs only once on mount
	const { pending } = useFormStatus();

	return (
		<form action={dispatch}>
			<div>
				<label className='mb-3 mt-5 block text-xs font-medium text-yellow-200'>
					Name
					<div className='relative'>
						<input
							className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black'
							id='userInput'
							type='string'
							name='userInput'
							placeholder='Enter your name'
							aria-describedby='customer-error'
						/>
						<UserIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
					</div>
				</label>

				<div
					id='customer-error'
					aria-live='polite'
					aria-atomic='true'
				>
					{state.errors?.userInput &&
						state.errors.userInput.map((error: string) => (
							<p
								className='mt-2 text-sm text-red-500'
								key={error}
							>
								{error}
							</p>
						))}
				</div>
				<button type='submit'>SUBMIT</button>
			</div>
			<button
				type='submit'
				disabled={pending}
			>
				{pending ? 'Submitting...' : 'Submit'}
			</button>
			<div>Count {` = ${count}`}</div>
		</form>
	);
}
