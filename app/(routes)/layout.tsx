import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({
	weight: ['300', '400', '600', '700'],
	subsets: [],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Formulário para compra de Stickers',
	description: 'Formulário acessível criado para que os clientes possam adquirir diferentes stickers com as quantidades especificadas.',
	authors: [{name: 'Affinity Code', url: 'https://affinitycode.com.br'}],
	keywords: ['next', 'react', 'exemplo react', 'formulario de sticker', 'affinitycode'],
	// robots: {
	// 	index: false,
	// },
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
