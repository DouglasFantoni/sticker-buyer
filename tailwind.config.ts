import type {Config} from 'tailwindcss';
import {FS_2, FS_3, FS_4, THEME_COLORS} from './app/_constants/theme';

const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		// extend: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontSize: {
			sm: FS_4,
			base: FS_3,
			lg: FS_2,
		},
		colors: THEME_COLORS,
		// colors: {
		// 	blue: "#1fb6ff",
		// 	purple: "#7e5bef",
		// 	pink: "#ff49db",
		// 	orange: "#ff7849",
		// 	green: "#13ce66",
		// 	yellow: "#ffc82c",
		// 	"gray-dark": "#273444",
		// 	gray: "#8492a6",
		// 	"gray-light": "#d3dce6",
		// },
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ['Inter', 'serif'],
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
		// },
	},
	plugins: [],
});
export default config;
