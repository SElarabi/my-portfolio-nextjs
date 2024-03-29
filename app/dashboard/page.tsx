/** @format */

import Intro from '@/app/ui/dashboard/intro';
import IntroHeader from '../ui/dashboard/intro-header';
import PortfolioCards from '@/app/ui/dashboard/portfolio-cards';

export default function Page() {
	return (
		<div>
			<IntroHeader />
			<div className='mt-8'>
				<Intro />
			</div>

			<div className='grid grid-cols-3 gap-x-4 mt-12'>
				{/* Field service Engineering */}
				<PortfolioCards
					title='Field Service Engineering'
					image='/imgs/web_dev_FSE.jpg'
					fieldTitle='Instrumentation Automation'
					customRef='/dashboard/fieldservice'
				/>
				{/* Software Engineering */}
				<PortfolioCards
					title='Software Engineering'
					fieldTitle='FULL Stack Web Development with MERN'
					image='/imgs/web_dev_SOFTWARE.jpg'
					customRef='/dashboard/software'
				/>
				{/* Retail Trading and Stock market */}
				<PortfolioCards
					title='Retail Trading'
					image='/imgs/web_dev_STOCKS.jpg'
					fieldTitle='Stocks & Crypto'
					customRef='#'
				/>
			</div>
		</div>
	);
}
