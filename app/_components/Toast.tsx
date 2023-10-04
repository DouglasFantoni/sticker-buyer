import {VariantProps, tv} from 'tailwind-variants';

const toastVariants = tv({
	base: 'p-2',
	variants: {
		visible: {
			true: 'visible',
			false: 'invisible',
		},
	},
	defaultVariants: {
		visible: false,
	},
});

interface IToastProps extends VariantProps<typeof toastVariants> {
	message: string;
}

export default function Toast({message, visible}: IToastProps) {
	return (
		<div className={toastVariants({visible})}>
			<label hidden={!visible} className={'text-CL_GREEN_DARK font-bold text-base  '}>
				{message}
			</label>
		</div>
	);
}
