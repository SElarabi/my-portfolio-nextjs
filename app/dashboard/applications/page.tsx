/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import { ProjectTag } from '@/app/ui/projectTag';
import Image from 'next/image';

export default function Page() {
	type projectType = {
		title: string;
		githHubLink: string;
		websiteLink: string;
		description: string;
		projectLogo: string;
	};
	const projects: projectType[] = [
		{
			title: 'FINANCIAL MARKET & NEWS',
			githHubLink: 'https://github.com/SElarabi/marketreact',
			websiteLink: 'https://selarabi.github.io/marketreact/',
			projectLogo: '/imgs/financialMarket.png',
			description: `This React application is meticulously designed to fetch diverse APIs for real-time stock market news and updates, refreshing the content every hour. Serving as a demonstrative showcase of React's robust framework, the app harnesses the power of modular components. Each component operates independently, enabling seamless updates without the need for full-page repaints or refreshes. The project's emphasis lies in leveraging React's unique capabilities, setting it apart from other frameworks.

The overarching objective of this project is to explore and capitalize on React's capabilities and options. By doing so, the app showcases how React excels in providing an exceptional development environment compared to other frameworks. Key considerations in the development process include modularization, error handling, responsive design, accessibility, testing, documentation, performance optimization, and security measures.

In summary, this React app stands as a testament to the versatility and power of the React framework, offering users a dynamic and user-friendly experience in the realm of stock market updates and news." site.`,
		},
		{
			title: 'EYE Movement demo',
			githHubLink: 'https://selarabi.github.io/Eye_Exercise/',
			websiteLink: 'https://selarabi.github.io/Eye_Exercise/',
			projectLogo: '/imgs/Moving_Eyes.png',
			description: `This Demo is a JavaScript application that utilizes HTML and CSS to create an image of eyes on the webpage. Instead of using an image file, the image is created using HTML components such as div, span, and containers. The JavaScript component of the project uses mouse event listeners to detect the movement of the cursor on the screen and updates the position of the eye elements accordingly. The position of the eye elements is updated in real-time, so that it appears as if the eyes are following the movement of the cursor, simulating the effect of eye tracking.`,
		},
		{
			title: 'PacMen Exercise',
			githHubLink: 'https://github.com/SElarabi/PacMen_Exercise',
			websiteLink: 'https://selarabi.github.io/PacMen_Exercise/',
			projectLogo: '/imgs/PacMen.png',
			description: `This project is a demo website that showcases a JavaScript game. The website includes a navbar with links to other pages, buttons to add PacMan, start, and stop the game, and a description of the game. The game itself is displayed in a container on the page, and uses HTML and CSS for the visual elements. The JavaScript component of the project interacts with the HTML elements to create a dynamic game experience where the position of the elements on the screen updates in real-time based on user interactions.`,
		},
		{
			title: 'Real Time bus Tracking',
			githHubLink: 'https://github.com/SElarabi/Real-Time-Bus-Tracker',
			websiteLink: 'https://selarabi.github.io/Real-Time-Bus-Tracker/',
			projectLogo: '/imgs/real_time_bus_tracking.png',
			description: `This web application is powered by JavaScript and enhanced with CSS animations to provide a dynamic display of bus locations in real-time.
It leverages the Mapbox API to showcase these locations using customized icons on a map.
The application periodically fetches data from the MBTA API and updates markers on the map every 10 seconds.
The markers represent the current positions of buses operating along Route 1, which runs from HARVARD TO BOSTON, traversing downtown in both directions.

Additionally, the webpage includes data tables that offers real-time tracking information for buses, indicating their upcoming bus stops for both inbound and outbound journeys.
To facilitate this functionality, the code utilizes the fetch API for data retrieval and seamlessly integrates with the Mapbox API for map rendering and marker manipulation.`,
		},
		{
			title: 'TIC-TAC-TOE Exercise',
			githHubLink: 'https://github.com/SElarabi/Tic-Tac-Toe',
			websiteLink: ' https://selarabi.github.io/Tic-Tac-Toe/',
			projectLogo: '/imgs/tic_tac_toe.png',
			description: `This project is a a JavaScript game.
This is a demo application website that showcases JavaScript and ReactJS implementation of a simple Tic-Tac-Toe game.
The code is organized into React functional components and uses React hooks to manage state and side effects.
Main functionality:
It initializes the game board, allowing two players to take turns.
It tracks the game's state, including each player's moves.
It checks for a winner based on the game state and displays the result.
It provides a restart button to reset the game.`,
		},
		{
			title: 'Simple Data Application Server',
			githHubLink: 'https://github.com/SElarabi/Application_server',
			websiteLink: 'https://simple-data-application-server.onrender.com/',
			projectLogo: '/imgs/server_app.png',
			description: `This is a simple Node.js application that uses the Express.js framework to create a RESTful API for managing user data, , including adding, deleting, and retrieving user information.

It also uses the lowdb library for data storage and the faker library for generating random avatar images.

This demo app is hosted with render.com webhosting.It might take little time to load when visiting the site.`,
		},
	];
	return (
		<div className='flex flex-col  ms-16 gap-8 max-w-3xl min-w-fit p-4'>
			<header className={`${styles.header}  `}>
				<div className={styles[`header-content`]}>
					<div
						className={`${styles[`header-subtitle`]} ${styles.glow} underline gap-4`}
					>
						<a
							className="text-red-200 after:content-['_↗']  hover:bg-sky-700"
							href='https://selarabi.github.io/Portfolio/projects.html'
							target='_blank'
						>
							WEB PROJECTS
						</a>
					</div>
				</div>
			</header>
			<div className=' space-y-16 max-w-3xl'>
				{projects.map((project, index) => (
					<ul
						key={index}
						className=' space-y-2'
					>
						<li>
							<span
								className={`${styles[`header-subtitle`]} ${
									styles.glow
								} underline gap-4 space-y-4`}
							>
								<a
									className="text-red-200 after:content-['_↗']  hover:bg-sky-700"
									href={project.websiteLink}
									target='_blank'
								>
									{project.title}
								</a>
							</span>
						</li>

						<li className=' flex flex-cols-2 gap-2 '>
							<span className='flex  bg-black'>
								<p
									className=' text-start gap-4'
									style={{ flex: '1' }}
								>
									<Image
										className={`float-left rounded size-24 p-1`}
										src={project.projectLogo}
										width={1000}
										height={1000}
										alt='Picture of the author'
									/>
									{project.description}
								</p>
							</span>
							<div className={`float-end rounded size-24 p-1`}>
								<ProjectTag
									title={project.title}
									githHubLink={project.githHubLink}
								/>
							</div>
						</li>

						{/* <li>
							<Link href={`${project.websiteLink}`}>{project.websiteLink}</Link>
						</li> */}
					</ul>
				))}
			</div>
		</div>
	);
}
