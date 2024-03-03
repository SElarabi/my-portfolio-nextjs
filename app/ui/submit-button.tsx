/** @format */

'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton(props) {
	const { pending } = useFormStatus();

	return (
		<button
			type={props}
			aria-disabled={pending}
		>
			SUBMIT
		</button>
	);
}
