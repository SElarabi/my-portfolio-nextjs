/** @format */

import React from 'react';

interface AlertProps {
	type: 'success' | 'error' | 'info';
	message: string;
}

export const Alert: React.FC<AlertProps> = ({ type, message }) => {
	let alertClass = '';

	switch (type) {
		case 'success':
			alertClass = 'bg-green-500 text-white';
			break;
		case 'error':
			alertClass = 'bg-red-500 text-white';
			break;
		case 'info':
			alertClass = 'bg-blue-500 text-white';
			break;
		default:
			alertClass = 'bg-gray-500 text-white';
	}

	return <div className={`p-4 rounded ${alertClass}`}>{message}</div>;
};
