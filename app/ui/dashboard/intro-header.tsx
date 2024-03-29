/** @format */

import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
export default function IntroHeader() {
	return (
		<div>
			<header className={styles.header}>
				{/* <div className={styles.overlay}></div> */}
				<div className={styles[`header-content`]}>
					{/*  */}
					<h1 className={styles[`header-title`]}>
						{/* - title */}
						<span className={styles.up}>HI!</span>
						<div className={styles['about-img-holder']}>
							<Image
								src='/fse_profile01.png'
								className={`${styles[`about-img`]} rounded-full`}
								width={500}
								height={500}
								alt='my_Pic'
							/>
						</div>
						<span className={styles.down}>I am Eddie&nbsp;LARABI</span>
						{/* prevent a line break between "Eddie" and "LARABI" when the viewport is
						flexed. */}
					</h1>
					<p className={styles[`header-subtitle`]}>
						Sofware&nbsp;Engineer and MIT-CERTIFIED
						Full&nbsp;Stack&nbsp;Web&nbsp;Developer 2023
					</p>
				</div>
			</header>
		</div>
	);
}
