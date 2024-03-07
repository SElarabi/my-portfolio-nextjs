/** @format */
'use server';

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const defaultValues = {
	user_name: '',
	user_email: '',
	message: '',
};
type defaultValues = {
	user_name: string;
	user_email: string;
	message: string;
};

export async function pushMessage(form: React.RefObject<HTMLFormElement>) {
	try {
		let sentStatus = await sendMessage(form);

		console.log('sentStatus:', sentStatus);
	} catch (error) {
		console.error('Error sending email:', error);
	}
}

async function sendMessage(formRef: React.RefObject<HTMLFormElement> | null) {
	let State = {
		success: false,
		error: '',
		message: '',
	};

	const form = formRef as React.RefObject<HTMLFormElement> | null;

	try {
		if (form && form.current) {
			await emailjs.sendForm('service_6yfy5fs', 'template_8kijxr3', form.current, {
				publicKey: 'BepF_3vS7SDG9tMYe',
			});

			State = { ...State, success: true };
		} else {
			State = { ...State, error: 'Form is not complete' };
		}
	} catch (error) {
		State = { ...State, message: `${error}` };
	}
	return State;
}
