/** @format */

import ContactTag from '@/app/ui/dashboard/contact-tag';

import styles from '@/app/ui/home.module.css';
import MessageForm from '@/app/ui/message-form';
import Image from 'next/image';

export default function Page() {
	return (
		<>
			<div className='grid gap-4 mt-20 ml-20'>
				<Image
					className={`${styles[`about-img`]} rounded-full size-24`}
					src='/fse_profile01.png'
					width={500}
					height={500}
					alt='Picture of the author'
				/>

				<p>
					Feel free to explore my GitHub repositories and connect with me on
					LinkedIn.
					<br />
					If you have any questions or would like to reach out, please don't hesitate
					to send me a message. <br />
					Thank you {'😊'}
				</p>
				<div className='grid '>
					<ContactTag />
				</div>
			</div>
			<div className='flex items-center mt-20   '>
				<MessageForm />
			</div>
		</>
	);
}
