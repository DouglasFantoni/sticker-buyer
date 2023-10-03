'use client';

import {Textarea} from '@/app/_components/form';
import H3 from '@/app/_components/text/H3';
import Label from '@/app/_components/text/Label';
import {required} from '@/app/_helpers/reactFormHookValidation';
import {Controller, FormProvider, useForm} from 'react-hook-form';
import StickerItemList from './StickerItemList';
import SubmitButton from './SubmitButton';

interface IFormStickerProps {
	observation: string;
	stickerReact: number;
	stickerVue: number;
	stickerAngular: number;
}
interface IStickerFormProps {}

export default function StickerForm({}: IStickerFormProps) {
	const methods = useForm<IFormStickerProps>({
		defaultValues: {
			observation: '',
			stickerReact: 0,
			stickerVue: 0,
			stickerAngular: 0,
		},
	});
	const {handleSubmit, control} = methods;

	const onSubmit = (data: IFormStickerProps) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form className="p-10" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<H3>Quais stickers?</H3>
					<div className="block">
						<StickerItemList />
					</div>
					<div className="mt-4">
						<Label htmlFor="observation">Observações</Label>
						<div>
							<Controller
								rules={{
									...required(),
								}}
								name={'observation'}
								control={control}
								render={({field}) => (
									<Textarea
										id="observation"
										{...field}
										labelProps={{
											className: 'hidden',
										}}
										className="bg-CL_BLUE_LIGHT !border-CL_BLUE_DARK !focus:border-CL_BLUE_DARK !text-CL_BLACK"
										size="md"
									/>
								)}
							/>
						</div>
					</div>
					<div className="flex justify-end mt-4">
						<SubmitButton />
					</div>
				</div>
			</form>
		</FormProvider>
	);
}
