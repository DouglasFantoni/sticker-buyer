import {IconButton, Input} from '@/app/_components/form';
import MinusIcon from '@/app/_components/icons/MinusIcon';
import PlusIcon from '@/app/_components/icons/PlusIcon';
import H4 from '@/app/_components/text/H4';
import {Controller, useFormContext, useWatch} from 'react-hook-form';

interface IStickerItemProps {
	name: string;
	formName: string;
}

enum ActionType {
	DECREMENT = 1,
	INCREMENT,
}

export default function StickerItem({name, formName}: IStickerItemProps) {
	const {control, setValue, getValues} = useFormContext();
	const value: number | undefined = useWatch({control, name: formName});
	const parsedValue = typeof value === 'number' ? value : 0;

	const onClick = (action: ActionType) => {
		switch (action) {
			case ActionType.INCREMENT:
				setValue(formName, parsedValue + 1);
				break;
			case ActionType.DECREMENT:
				if (parsedValue > 0) {
					setValue(formName, parsedValue - 1);
				}
				break;
		}
	};

	return (
		<div className="flex justify-between w-full items-center">
			<H4>{name}</H4>
			<div className="flex">
				{parsedValue > 0 && (
					<IconButton
						aria-label={`Diminuir em 1 a quantidade de stickers ${name}`}
						onClick={() => onClick(ActionType.DECREMENT)}
						className="bg-CL_BLUE_DARK p-2  mr-2 "
					>
						<MinusIcon className="w-5 h-4 text-CL_WHITE_LIGHT" />
					</IconButton>
				)}
				<div>
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
								aria-label={`Quantidade de stickers ${name}`}
								labelProps={{
									className: 'hidden',
								}}
								hidden={!(parsedValue > 0)}
								min={0}
								crossOrigin="true"
							/>
						)}
					/>
				</div>
				<IconButton
					aria-label={`Aumentar em 1 a quantidade de stickers ${name}`}
					onClick={() => onClick(ActionType.INCREMENT)}
					className="bg-CL_BLUE_DARK p-2 ml-2"
				>
					<PlusIcon className="w-5 h-4 text-CL_WHITE_LIGHT" />
				</IconButton>
			</div>
		</div>
	);
}
