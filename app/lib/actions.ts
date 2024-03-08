/** @format */
'use server';

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

import { Console } from 'node:console';
// import axios from 'axios';

const axios = require('axios');

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

type TemplateParams = {
	message: string;
	user_name: string;
	user_email: string;
};
export async function sendEmailJs(props: TemplateParams) {
	const FormData = require('form-data');
	let data = new FormData();
	data.append('message', '');
	data.append('user_name', '');
	data.append('user_email', '');

	let State = {
		success: false,
		error: '',
		message: '',
	};

	let templateParams = {
		message: props.message,
		user_name: props.user_name,
		user_email: props.user_email,
	};
	// add PUBLIC to env keys for the server component to see it.

	let postData = {
		service_id: process.env.SERVICE_ID!,
		template_id: process.env.TEMPLATE_ID!,
		user_id: process.env.PUBLIC_KEY!,
		template_params: {
			message: templateParams.message,
			user_name: templateParams.user_name,
			user_email: templateParams.user_email,
		},
		accessToken: process.env.ACCESS_TOKEN,
	};

	try {
		const response = await axios.post(
			'https://api.emailjs.com/api/v1.0/email/send',
			postData,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		console.log('response.statusCode', response.status);
		if (response.status === 200) {
			State = { ...State, success: true };
		} else {
			State = { ...State, error: 'Form is not complete' };
		}
	} catch (error) {
		State = { ...State, message: `${error}` };
	}
	return State;
}
