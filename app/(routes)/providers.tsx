'use client';
import {ThemeProvider} from '@material-tailwind/react';
import {ReactNode} from 'react';

interface IprovidersProps {
	children: ReactNode;
}

export default function Providers({children}: IprovidersProps) {
	return (
		<>
			<ThemeProvider>{children}</ThemeProvider>
		</>
	);
}
