/** @format */
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
	return (
		<div className='flex flex-col  gap-24'>
			<div className={`${styles['about']} `}>
				<div className={styles['about-caption']}>
					<h2 className={`${styles['section-title mb-3']} underline`}>
						Professional Summary
					</h2>
					<p className={`${lusitana.className} mb-2 text-lg tracking-wide`}>
						Aspiring and motivated{' '}
						<span className={styles.glow}>Software&nbsp;engineer</span> with a solid
						foundation in both industrial field service engineering and software
						development. Experienced in industrial settings, including
						instrumentation, automation, and electromechanics. Committed to leveraging
						technical skills acquired through a diverse educational background and
						professional experiences to contribute to software engineering projects.
					</p>
				</div>
			</div>
			<div className='  border-solid border-2 border-slate-500 md:max-h-screen '>
				{/* Use an iframe to embed the webpage */}
				<iframe
					src='https://selarabi.github.io/Portfolio/index.html#home' // Replace with the URL of the webpage you want to display
					title='Webpage Viewer'
					width='100%'
					height='760px' // Set the height to 100% of the viewport height
				></iframe>
			</div>
		</div>
	);
}
