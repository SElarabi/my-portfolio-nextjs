/** @format */
'use client';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
