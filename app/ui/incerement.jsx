/** @format */
'use client';
import { useFormState } from 'react-dom';

export default function StatefulForm({}) {
	const [state, formAction] = useFormState(increment, 0);

	('use server');
	async function increment(previousState, formData) {
		return previousState + 1;
	}
	return (
		<form action={formAction}>
			<div>{state}</div>
			<div>
				<button formAction={formAction}>{'    '}Increment</button>
			</div>
		</form>
	);
}
