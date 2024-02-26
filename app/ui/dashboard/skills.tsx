/** @format */
import styles from '@/app/ui/home.module.css';
export default function Skills() {
	return (
		<div>
			<section className={styles[`section pt-0`]}>
				<div className='shadow-lg'>
					<p className={styles['section-subtitle']}>What I Do ?</p>
					<h6 className={`${styles['section-title mb-3']} underline`}>Skills</h6>
					<div className='row '>
						{/* <!--Field service engineering detail--> */}
						<div className='  p-4 '>
							<h4 className='underline'>Field service Engineer</h4>
							<p>
								I work as a service engineer, providing on-site support and maintenance
								for variety of systems. My skills in this area include:
							</p>
							<ul className='list-disc'>
								<li>Strong troubleshooting and problem-solving abilities</li>
								<li>Experience with preventive maintenance and repair procedures</li>
								<li>
									Ability to communicate effectively with customers and team members
								</li>
								<li>Proficiency in the use of diagnostic and testing equipment</li>
								<li>
									knowledge of safety and regulatory standard, including OSHA and NFPA
								</li>
							</ul>
						</div>
						{/* <!--end of Field service engineering detail--> */}

						{/* <!--section of software engineering--> */}
						<div className='bg-blue-500 shadow-lg shadow-blue-500/50 p-4'>
							<h4 className='underline'>Software engineering skills & knowledge</h4>

							<ul className='list-disc'>
								<li>
									Strong understanding of software design patterns and architecture
									principles
								</li>
								<li>
									Proficient in Git and GitHub for efficient version control, enabling
									collaborative development, code tracking, and project management
								</li>

								<li>Advanced knowledge of JavaScript and system programming</li>

								<li>
									Web Development, Back-End Development, Build, test and deploy a web
									application using the MERN stack
								</li>
							</ul>
						</div>
						{/* <!-- end section of software engineering--></br> */}
					</div>
				</div>
			</section>
		</div>
	);
}
