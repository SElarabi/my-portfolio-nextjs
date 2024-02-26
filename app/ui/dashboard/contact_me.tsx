/** @format */

// import React from 'react';
import section from '@/app/ui/home.module.css';

export default function ContactMe() {
	return (
		<section
			id='emailMe'
			className='section'
		>
			<div className='container text-center'>
				<h6 className='section-title mb-5'>Send Me a Message</h6>

				{/* Contact form */}

				{/* Success Message */}
				<div
					id='success-message'
					className='alert alert-success'
					style={{ display: 'none' }}
				>
					Your message has been sent successfully.
				</div>
			</div>
		</section>
	);
}
