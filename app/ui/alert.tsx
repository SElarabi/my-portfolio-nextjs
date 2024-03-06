/** @format */

import React from 'react';
import ReactModal from 'react-modal';

interface AlertProps {
	type: 'success' | 'error' | 'info';
	message: string;
}

interface AlertModalProps {
	isOpen: boolean;
	type: 'success' | 'error';
	message: string;
	onRequestClose: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({
	isOpen,
	type,
	message,
	onRequestClose,
}) => {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='Alert Modal'
			className={`modal ${type === 'success' ? 'success' : 'error'}`}
		>
			<h2>{type === 'success' ? 'Success' : 'Error'}</h2>

			<p>{message}</p>
			<button onClick={onRequestClose}>Close</button>
		</ReactModal>
	);
};

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
