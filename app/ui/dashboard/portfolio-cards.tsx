/** @format */
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
interface PortfolioCardProps {
	title: string;
	image: string;
	fieldTitle: string;
	customRef: string;
}
const PortfolioCards: React.FC<PortfolioCardProps> = ({
	title,
	image,
	fieldTitle,
	customRef = '/app/about_me',
}) => {
	return (
		<div className={`  ${lusitana.className} ${styles.glow} max-w-[100%]  `}>
			<h4 className='mb-4'>{title}</h4>
			<Link
				href={customRef}
				className={styles['portfolio-card']}
			>
				<img
					src={image}
					alt={title}
					className={`${styles['portfolio-card-img']}
					rounded-lg`}
				/>
				<span className={styles['portfolio-card-overlay']}>
					<span className={styles['portfolio-card-caption']}>
						<h4>{title}</h4>
						<p className={`${styles['glow-blue']} font-weight-normal`}>
							{fieldTitle}
						</p>
					</span>
				</span>
			</Link>
		</div>
	);
};
export default PortfolioCards;
