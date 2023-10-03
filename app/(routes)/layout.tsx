import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({
	weight: ['300', '400', '600', '700'],
	subsets: [],
	display: 'swap',
	// subsets: ["latin"]
});

export const metadata: Metadata = {
	title: 'Formulário para compra de Stickers',
	description: 'Generated by create next app',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="pt">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
