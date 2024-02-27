/** @format */

import SocialCard from '@/app/ui/dashboard/social-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
	return (
		<div className='text-lg text-yellow-200 margin-right: 30px'>
			<div className='row my-5 shadow-sm'>
				{/* <!-- Email Contact --> */}
				<div className='col-md-4 shadow-lg'>
					<h3 className='card-title my-5'>
						My E-mail
						<div className='max-w-[10%]'>
							<FontAwesomeIcon icon={faAt} />
						</div>
						<SocialCard
							icon_name='Contact_mail'
							customRef='mailto:eddie.larabi@gmail.com'
						/>
					</h3>
				</div>

				{/* <!-- GitHub card --> */}
				<div className='col-md-4 shadow-lg'>
					<h3 className='card-title my-5'>
						<i className='text-lg text-yellow-200 margin-right: 30px'></i>
						My GitHub
					</h3>
					<div className='max-w-[10%]'>
						<FontAwesomeIcon icon={faGithub} />
					</div>
					<SocialCard
						icon_name='Github'
						customRef='https://github.com/SElarabi'
					/>
				</div>

				{/* <!-- LinkedIn Card --> */}
				<div className='col-md-4 shadow-lg'>
					<h3 className='card-title my-5'>
						<i className='text-lg text-yellow-200 margin-right: 30px'></i>
						My LinkedIn
					</h3>
					<div className='max-w-[10%]'>
						<FontAwesomeIcon icon={faLinkedin} />
					</div>
					<SocialCard
						icon_name='LinkedIn'
						customRef='https://linkedin.com/in/eddie-larabi-3471bb60'
					/>
				</div>
			</div>
		</div>
	);
}
