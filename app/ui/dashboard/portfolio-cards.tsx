/** @format */
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
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
		<div className={`  ${lusitana.className} ${styles.glow}`}>
			<h4 className='truncate mb-4 '>{title}</h4>
			<Link
				href={customRef}
				className={styles['portfolio-card']}
			>
				<Image
					src={image}
					alt={title}
					className={`${styles['portfolio-card-img']}
					rounded-lg`}
					width={500}
					height={500}
				/>
				<span className={styles['portfolio-card-overlay']}>
					<span className={styles['portfolio-card-caption']}>
						<h4>{title}</h4>
						<p className={`${styles['glow-blue']} font-weight-normal `}>
							{fieldTitle}
						</p>
					</span>
				</span>
			</Link>
		</div>
	);
};
export default PortfolioCards;
