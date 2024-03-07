/** @format */

'use client';
import {
	TrophyIcon,
	HomeIcon,
	DocumentIcon,
	ChatBubbleLeftEllipsisIcon,
	CommandLineIcon,
	ComputerDesktopIcon,
	GlobeAltIcon,
	WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: 'Home', href: '/dashboard', icon: HomeIcon },
	{
		name: 'Contact Me',
		href: '/dashboard/contact_me',
		icon: ChatBubbleLeftEllipsisIcon,
	},
	{
		name: 'Software ',
		href: '/dashboard/software',
		// https://selarabi.github.io/Portfolio/projects.html
		icon: ComputerDesktopIcon,
	},
	{
		name: 'Field Service',
		href: '/dashboard/fieldservice',
		// https://selarabi.github.io/Portfolio/projects.html
		icon: WrenchScrewdriverIcon,
	},
	{
		name: 'Projects',
		href: '/dashboard/applications',
		// https://selarabi.github.io/Portfolio/projects.html
		icon: GlobeAltIcon,
	},
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-black p-3 text-sm font-medium hover:bg-slate-500 hover:text-white-600 md:flex-none md:justify-start md:p-2 md:px-3',
							{
								'bg-slate-500 text-white-500': pathname === link.href,
							}
						)}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
