/** @format */
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
	return (
		<div className='flex flex-col  gap-24'>
			<div className={`${styles['about']} `}>
				<div className={styles['about-caption']}>
					<h2 className={`${styles['section-title mb-3']} underline`}>
						Professional Experience
					</h2>
				</div>
			</div>
		</div>
	);
}
