'use client';
import {ThemeProvider} from '@material-tailwind/react';
import {ReactNode} from 'react';
import createTheme from '../_helpers/theme';

interface IprovidersProps {
	children: ReactNode;
}

export default function Providers({children}: IprovidersProps) {
	return (
		<>
			<ThemeProvider value={createTheme()}>{children}</ThemeProvider>
		</>
	);
}
