'use client';

import Toast from '@/app/_components/Toast';
import {Textarea} from '@/app/_components/form';
import H3 from '@/app/_components/text/H3';
import Label from '@/app/_components/text/Label';
import {useState} from 'react';
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
 const [showToast, setShowToast] = useState(false);

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
		// Exibe o toast
		setShowToast(true);

		console.log('SUBMIT', data);

		// Esconde o toast após 5 segundos
		setTimeout(() => {
			setShowToast(false);
		}, 8000);
 };

 return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="p-10">
					<H3>Quais stickers?</H3>
					<div className="block">
						<StickerItemList />
					</div>
					<div className="mt-4">
						<Label htmlFor="observation">Observações</Label>
						<div>
							<Controller
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
				</div>
				<div className="flex justify-between  p-10 bg-CL_GRAY_LIGHT">
					<Toast visible={showToast} message="Formulário enviado com sucesso!" />
					<div className="">
						<SubmitButton />
					</div>
				</div>
			</form>
		</FormProvider>
 );
}
