interface IH3Props {
	children: React.ReactNode;
}

export default function H3({children}: IH3Props) {
	return <h3 className="font-bold text-CL_BLACK text-base   mt-3 mb-2">{children}</h3>;
}
