import {THEME_COLORS} from '@/app/_constants/theme';
import {ThemeConfig} from 'tailwindcss/types/config';

const DEFAULT_THEME: ThemeConfig = {
	colors: THEME_COLORS,
};

export default function createTheme() {
	return DEFAULT_THEME;
}
