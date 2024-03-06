/** @format */

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialCardProps {
	icon_name: string;
	customRef: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
	icon_name = '',
	customRef = '#',
}) => {
	return (
		<h3 className='text-red-300 focus:border-blue-400 visited:text-blue-600 '>
			<Link
				href={customRef}
				target='_blank'
			>
				{icon_name}
			</Link>
		</h3>
	);
};

export default SocialCard;
