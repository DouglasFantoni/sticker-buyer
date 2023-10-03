import {Button} from '@/app/_components/form';
import {useFormContext, useWatch} from 'react-hook-form';

interface ISubmitButtonProps {}

export default function SubmitButton({}: ISubmitButtonProps) {
	const {control} = useFormContext();

	const watchedValues = useWatch({
		control,
		name: ['stickerReact', 'stickerVue', 'stickerAngular'],
	});

	return (
		<Button disabled={!canSubmit(watchedValues)} type="submit" className=" bg-CL_BLUE_DARK px-6 font-base py-1">
			Enviar
		</Button>
	);
}

const canSubmit = (watchedValues: number[]) => watchedValues.find(val => val > 0);
