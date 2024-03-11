/** @format */

import SocialCard from '@/app/ui/dashboard/social-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

type projectType = {
	title: string;
	githHubLink: string;
};
export const ProjectTag: React.FC<projectType> = ({ title, githHubLink }) => {
	return (
		<div className='grid grid-row text-yellow-300 ms-4 items-baseline max-w-[10%] hover:bg-sky-700'>
			<div className='box-border h-8 w-8  border-2 hover:bg-sky-700'>
				<Link
					href={githHubLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={faGithub} />
				</Link>
			</div>
			<div className='bg-orange-900 hover:bg-sky-700 '>
				<SocialCard
					icon_name='Github'
					customRef={githHubLink}
				/>
			</div>
		</div>
	);
};
