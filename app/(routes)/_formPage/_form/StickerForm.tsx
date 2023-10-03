'use client';

import H3 from '@/app/_components/Text/H3';
import {Textarea} from '@/app/_components/form';
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
	const {
		register,
		handleSubmit,
		formState: {errors},
		control,
	} = methods;

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
						<H3>Observações</H3>
						<div>
							<Controller
								rules={{
									...required(),
								}}
								name={'observation'}
								control={control}
								render={({field}) => (
									<Textarea
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
