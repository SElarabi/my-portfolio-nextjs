/** @format */

// import React from 'react';

import styles from '@/app/ui/home.module.css';
export default function ContactMe() {
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.overlay}></div>
				<div className={styles[`header-content`]}>
					{/*  */}

					{/* - title */}

					<div className={styles['about-img-holder']}>
						<img
							src='/fse_profile01.png'
							className={`${styles[`about-img`]} rounded-full`}
							alt='my_Pic'
						/>
					</div>

					{/* prevent a line break between "Eddie" and "LARABI" when the viewport is
						flexed. */}
				</div>
			</header>

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
		</div>
	);
}
