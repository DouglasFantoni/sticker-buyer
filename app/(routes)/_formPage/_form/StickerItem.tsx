import {IconButton, Input} from '@/app/_components/form';
import MinusIcon from '@/app/_components/icons/MinusIcon';
import PlusIcon from '@/app/_components/icons/PlusIcon';
import H4 from '@/app/_components/text/H4';
import {Controller, useFormContext, useWatch} from 'react-hook-form';

interface IStickerItemProps {
	name: string;
	formName: string;
}

enum Op {
	'SUB' = 1,
	'PLUS',
}

export default function StickerItem({name, formName}: IStickerItemProps) {
	const {
		control,
		setValue,
		getValues,
		formState: {errors},
	} = useFormContext();

	const value: number | undefined = useWatch({control, name: formName});

	const parsedValue = typeof value === 'number' ? value : 0;

	const onClick = (operation: Op) => {
		const valueParsed = parsedValue;
		if (operation === Op.PLUS) {
			setValue(formName, valueParsed + 1);
		} else if (valueParsed > 0) {
			setValue(formName, valueParsed - 1);
		}
	};
	const canShow = parsedValue <= 0;
	return (
		<div className="flex justify-between w-full items-center">
			<H4>{name}</H4>
			<div className="flex">
				{!canShow ? (
					<IconButton
						aria-label={`Diminuir em 1 a quantidade de stickers ${name}`}
						disabled={canShow}
						onClick={() => onClick(Op.SUB)}
						className="bg-CL_BLUE_DARK p-2  mr-2 "
					>
						<MinusIcon className="w-5 h-4 text-CL_WHITE_LIGHT" />
					</IconButton>
				) : null}
				<div className="">
					<Controller
						name={formName}
						control={control}
						render={({field}) => (
							<Input
								type="number"
								{...field}
								className="!font-bold !text-CL_BLACK text-base text-center !border !border-CL_BLUE_DARK bg-CL_BLUE_LIGHT"
								containerProps={{className: `max-w-[60px] min-w-[50px]  `}}
								size="md"
								labelProps={{
									className: 'hidden',
								}}
								hidden={canShow}
								crossOrigin="true"
							/>
						)}
					/>
				</div>
				<IconButton onClick={() => onClick(Op.PLUS)} className="bg-CL_BLUE_DARK p-2 ml-2">
					<PlusIcon className="w-5 h-4 text-CL_WHITE_LIGHT" />
				</IconButton>
			</div>
		</div>
	);
}
