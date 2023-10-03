import {HTMLProps} from 'react';

interface ILabel extends HTMLProps<HTMLLabelElement> {
	children: React.ReactNode;
}

export default function Label({children}: ILabel) {
	return <label className="font-bold text-CL_BLACK text-base   mt-3 mb-2">{children}</label>;
}
