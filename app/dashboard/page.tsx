/** @format */

import { lusitana } from '@/app/ui/fonts';
import Intro from '@/app/ui/dashboard/intro';
import IntroHeader from '../ui/dashboard/intro-header';
import Portfoliocards from '../ui/dashboard/portfolio-cards';

export default function Page() {
	return (
		<div className='flex flex-col  gap-36'>
			<IntroHeader />

			<div className='flex justify-center items-center flex-col gap-36'>
				<Intro />
			</div>

			<div className=' grid grid-cols-3 gap-6 grid-flow-row   '>
				{/* Field service Engineering */}
				<Portfoliocards
					title='Field Service Engineering'
					image='/imgs/web_dev_FSE.jpg'
					fieldTitle='Instrumentation Automation'
					customRef='/dashboard/about_me/fieldservice'
				/>
				{/* Software Engineering */}
				<Portfoliocards
					title='Software Engineering'
					fieldTitle='FULL Stack Web Development with MERN'
					image='/imgs/web_dev_SOFTWARE.jpg'
					customRef='/dashboard/about_me/software'
				/>
				{/* Retail Trading and Stock market */}
				<Portfoliocards
					title='Retail Trading'
					image='/imgs/web_dev_STOCKS.jpg'
					fieldTitle='Stocks & Crypto'
					customRef='#'
				/>
			</div>
		</div>
	);
}
