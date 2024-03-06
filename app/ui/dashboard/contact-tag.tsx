/** @format */

import SocialCard from '@/app/ui/dashboard/social-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

export default function Contacttag() {
	return (
		<div className='flex justify-center justify-items-center ms-16 gap-8 max-w-[50%]'>
			{/* Email Contact */}

			<div className=' text-green-300 max-w-[10%]'>
				<FontAwesomeIcon icon={faAt} />
				<SocialCard
					icon_name='E_mail'
					customRef='mailto:eddie.larabi@gmail.com'
				/>
			</div>

			{/* GitHub card */}

			<div className=' text-yellow-300 ms-4 items-baseline max-w-[10%]'>
				<FontAwesomeIcon icon={faGithub} />
				<SocialCard
					icon_name='Github'
					customRef='https://github.com/SElarabi'
				/>
			</div>

			{/* LinkedIn Card */}
			<div className='flex-none text-blue-300 ms-4  max-w-[9%]'>
				<FontAwesomeIcon icon={faLinkedin} />
				<SocialCard
					icon_name='LinkedIn'
					customRef='https://linkedin.com/in/eddie-larabi-3471bb60'
				/>
			</div>
		</div>
	);
}
