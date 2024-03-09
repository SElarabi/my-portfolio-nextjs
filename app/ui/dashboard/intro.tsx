/** @format */
import { lusitana } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Intro() {
	return (
		<section className={styles[`section pt-0`]}>
			{/* <!-- container --> */}
			<div className='container text-center'>
				{/* <!-- about wrapper --> */}
				<div className={styles['about']}>
					<div className={styles['about-caption']}>
						<h2 className={`${styles['section-title mb-3']} underline`}>About Me</h2>
						<p className={`${lusitana.className} mb-2 text-lg tracking-wide`}>
							I am an accomplished{' '}
							<span className={styles.glow}>Field&nbsp;Service&nbsp;engineer</span> and{' '}
							<span className={styles.glow}>Software&nbsp;engineer</span>, boasting a
							remarkable 18-year track record of success in both domestic and
							international markets.
							<br />
							My expertise is further enhanced by my prestigious certification from MIT
							in full-stack development, earned in the illustrious August of 2023.
							<br />
							My commitment to perpetual learning and relentless pursuit of excellence
							in the ever-evolving realms of technology and innovation underscore my
							professional journey.
						</p>
					</div>
				</div>
				{/* <!-- end of about wrapper --> */}
			</div>
			{/* Name<!-- end of container --> */}
		</section>
	);
}
