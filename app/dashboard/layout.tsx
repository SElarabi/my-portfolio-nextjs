/** @format */

import SideNav from '@/app/ui/dashboard/sidenav';

import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex h-full flex-col md:flex-row md:overflow-hidden gap-x-4'>
			<div className='w-full  flex-none md:w-64'>
				<SideNav />
			</div>
			<div className=' w-[100%] p-4'>{children}</div>
		</div>
	);
}
