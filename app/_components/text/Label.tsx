import {ComponentProps} from 'react';

// interface ILabel extends HTMLProps<HTMLLabelElement> {
interface ILabel extends ComponentProps<'label'> {
	children: React.ReactNode;
}

export default function Label({children, ...props}: ILabel) {
	return (
		<label className="font-bold text-CL_BLACK text-base mt-3 mb-2" {...props}>
			{children}
		</label>
	);
}
