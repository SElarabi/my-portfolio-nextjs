/** @format */

'use server';

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export async function sendMessage(
	formRef: React.LegacyRef<HTMLFormElement> | undefined
) {
	let State = {
		success: false,
		error: '',
		message: '',
	};
	console.log('SENDING MESSAGE CALL BACK ');
	const form = formRef as React.RefObject<HTMLFormElement> | null;

	try {
		if (form && form.current) {
			await emailjs.sendForm(
				process.env.SERVICE_ID!,
				process.env.TEMPLATE_ID!,
				form.current,
				{
					// publicKey: 'SLJKHKLJGHKL'!,
					publicKey: process.env.PUBLIC_KEY!,
				}
			);

			State = { ...State, success: true };
		} else {
			State = { ...State, error: 'Form is not complete' };
		}
	} catch (error) {
		State = { ...State, message: `${error}` };
	}
	return State;
}
