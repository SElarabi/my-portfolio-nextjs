/** @format */

import { useFormState } from 'react-dom';

interface StatefulFormProps {}

async function increment(state: number, formData: FormData): Promise<number> {
	return state + 1;
}

function StatefulForm({}: StatefulFormProps) {
	const [state, formAction] = useFormState(increment, 0);

	return (
		<form>
			{state}
			<button formAction={formAction}>Increment</button>
		</form>
	);
}
