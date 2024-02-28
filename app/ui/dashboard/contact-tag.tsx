/** @format */

import SocialCard from '@/app/ui/dashboard/social-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

export default function Contacttag() {
	return (
		<div className=' flex text-yellow-200 ms-16 gap-8 '>
			{/* Email Contact */}

			<div className=' max-w-[8%]'>
				<SocialCard
					icon_name='E_mail'
					customRef='mailto:eddie.larabi@gmail.com'
					name='SAID LARABI'
				/>
				<FontAwesomeIcon icon={faAt} />
			</div>

			{/* GitHub card */}

			<div className=' ms-4 items-baseline max-w-[10%]'>
				<SocialCard
					icon_name='Github'
					customRef='https://github.com/SElarabi'
					name='SAID LARABI'
				/>
				<FontAwesomeIcon icon={faGithub} />
			</div>

			{/* LinkedIn Card */}
			<div className='  ms-4 items-baseline max-w-[7%]'>
				<SocialCard
					icon_name='LinkedIn'
					customRef='https://linkedin.com/in/eddie-larabi-3471bb60'
					name='SAID LARABI'
				/>
				<FontAwesomeIcon icon={faLinkedin} />
			</div>
		</div>
	);
}
