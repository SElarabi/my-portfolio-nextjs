/** @format */

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialCardProps {
	icon_name: string;
	customRef: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
	icon_name = 'faCoffee',
	customRef = '#',
}) => {
	return (
		<div className='col-md-4 shadow-lg'>
			<h3 className='card-title my-5'>{icon_name}</h3>

			<p className='card-text'>
				<a
					href={customRef}
					target='_blank'
					rel='noopener noreferrer'
				>
					{customRef}
				</a>
			</p>
		</div>
	);
};

export default SocialCard;
