/** @format */

import { lusitana } from '@/app/ui/fonts';
import Intro from '@/app/ui/dashboard/intro';
import IntroHeader from '../ui/dashboard/intro-header';

export default function Page() {
	return (
		<div>
			<IntroHeader />
			<main>
				<Intro />
			</main>
		</div>
	);
}
