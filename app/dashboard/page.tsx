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
					title='Field&nbsp;Service&nbsp;Engineering'
					image='/imgs/web_dev_FSE.jpg'
					fieldTitle='Instrumentation&nbsp;&&nbsp; Automation'
					customRef='/dashboard/about_me'
				/>
				{/* Software Engineering */}
				<Portfoliocards
					title='Software&nbsp;Engineering'
					fieldTitle='FULL Stack Web Development with MERN'
					image='/imgs/web_dev_SOFTWARE.jpg'
					customRef='#'
				/>
				{/* Retail Trading and Stock market */}
				<Portfoliocards
					title='Retail&nbsp;Trading'
					image='/imgs/web_dev_STOCKS.jpg'
					fieldTitle='Stocks & Crypto'
					customRef='#'
				/>
			</div>
		</div>
	);
}
