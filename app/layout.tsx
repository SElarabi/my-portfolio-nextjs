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
			<body className={`${inter.className} antialiased gap-x-4`}>{children}</body>
		</html>
	);
}
