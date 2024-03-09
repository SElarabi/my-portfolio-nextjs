/** @format */

import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
	title: 'SE LARABI PORTFOLIO',
	description: 'Larabi portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<meta charSet='utf-8' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<body className={`${inter.className} antialiased gap-x-4`}>{children}</body>
		</html>
	);
}
