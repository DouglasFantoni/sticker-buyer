interface IH4Props {
	children: React.ReactNode;
}

export default function H4({children}: IH4Props) {
	return <h4 className=" text-CL_BLACK text-sm mt-3 mb-2">{children}</h4>;
}
