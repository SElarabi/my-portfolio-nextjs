/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import styles from '@/app/ui/home.module.css';

export default function Page() {
	const camera = icon({ prefix: 'fas', iconName: 'camera' });
	console.log('process.env.PUBLIC_PUBLIC_KEY :', process.env.ACCESS_TOKEN);

	return (
		<div className='flex justify-center justify-items-center  ms-16 gap-8 max-w-[50%]'>
			<div className={styles.centerContent}>
				<header className={styles.header}>
					<div className={styles[`header-content`]}>
						<div
							className={`${styles[`header-subtitle`]} ${styles.glow} underline gap-4`}
						>
							UNDER CONSTRUCTION
						</div>
					</div>
				</header>

				<FontAwesomeIcon icon={faScrewdriverWrench} />
			</div>
			<h1>
				The value of customKey is:
				<p className={` ${styles.glow} underline gap-4`}>
					{process.env.PUBLIC_PUBLIC_KEY}
				</p>
			</h1>
		</div>
	);
}
