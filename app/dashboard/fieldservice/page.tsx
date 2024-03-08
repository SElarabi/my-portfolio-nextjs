/** @format */
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import ContactTag from '@/app/ui/dashboard/contact-tag';
import { mySkills } from './skills';

export default function Page() {
	return (
		<>
			<header
				className={`${styles.header}  
					${styles[`header-subtitle`]} grid gap-4 mt-20 ml-20 w-[75%]`}
			>
				<div className={styles[`header-content`]}>
					<img
						src='/fse_profile01.png'
						className={`${styles[`about-img`]} rounded-full size-24`}
						alt='my_Pic'
					></img>

					<p className={`${lusitana.className} mb-2 text-lg tracking-wide`}>
						Experienced Field Service Engineer with over eighteen years of expertise
						in both domestic and international industrial settings. Specializing in
						instrumentation, automation, and electromechanics.
					</p>
					<p>
						{' '}
						I am dedicated to enhancing operational efficiency through my
						comprehensive knowledge and hands-on approach.
					</p>
					<p>
						I excel in motivating teams to achieve objectives and ensuring smooth
						project progression, encompassing commissioning, repair, and preventive
						maintenance, as well as instrumentation upgrades.
					</p>
				</div>
			</header>
			<div
				id='skills'
				className=' pt-12'
			>
				<header className={styles.header}>
					<div className={styles[`header-content`]}>
						<div
							className={`${styles[`header-subtitle`]} ${styles.glow} underline gap-4`}
						>
							Field Service skills and & Expertise
						</div>

						<ul className={`${styles[`header-subtitle`]} list-disc gap-4 p-4`}>
							{mySkills.map((fieldServiceSkills, index) => (
								<li
									key={index}
									className={`${styles[`header-subtitle-sm`]} undeline `}
								>
									<p className={styles.glow}>{fieldServiceSkills.title}</p>
									{Array.isArray(fieldServiceSkills.skill) ? (
										<ul>
											{fieldServiceSkills.skill.map((individualSkill, skillIndex) => (
												<li key={skillIndex}>{individualSkill}</li>
											))}
										</ul>
									) : (
										<p>{fieldServiceSkills.skill}</p>
									)}
								</li>
							))}
						</ul>
					</div>
				</header>
			</div>
			{/* <!--end of Field service engineering detail--> */}
			<div className='grid pt-20'>
				<div>
					<p className='pb-4'>
						Feel free to explore my GitHub repositories and connect with me on
						LinkedIn.
					</p>
				</div>

				<ContactTag />

				<p>
					<br />
					If you have any questions or like to contact me, do not hesitate to send me
					a message. <br />
					Thank you {'😊'}
				</p>
			</div>
		</>
	);
}
