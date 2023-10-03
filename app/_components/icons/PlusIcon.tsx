interface IPlusIconProps {
	className: string;
	// color: typeof THEME_COLORS;
}

export default function PlusIcon({className}: IPlusIconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
			<path
				fillRule="evenodd"
				d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
