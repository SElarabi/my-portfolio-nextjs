/** @format */
'use server';
import { ZodObject, z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { useFormState } from 'react-dom';

const FormSchema = z.object({
	userInput: z.string().min(6, { message: 'Please enter MINIMUM, ' }),
});

// This is temporary until @types/react-dom is updated
export type State = {
	userInput?: string[];
	errors?: { userInput?: string[] };
	message?: string | { userInput: string } | null;
};

export async function dispUserInput(
	state: State,
	formData: FormData
): Promise<State> {
	const validatedFields = FormSchema.safeParse({
		userInput: formData.get('userInput'),
	});
	console.log('ACTION FUNCTION CALLED');
	// Add userInputString to the array in state
	const updatedUserInput = state.userInput
		? [...(state.userInput || [])]
		: state.userInput;

	// console.log('validatedFields :', validatedFields);
	// If form validation fails, return errors early. Otherwise, continue.
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields. Failed to Create Message.',
		};
	} else {
		// console.log('validatedFields.data :', validatedFields.data.userInput);
		return {
			errors: {},
			message: validatedFields.data,
		}; // Adjust the return based on your actual state structure;
	}

	revalidatePath('/dashboard');
	// redirect('/dashboard');
}
