import {Card} from '@/app/_components/form';
import HeaderImage from './_formPage/HeaderImage';
import StickerForm from './_formPage/_form/StickerForm';

export default function Home() {
	return (
		<main className="w-full h-screen flex items-center justify-center bg-CL_WHITE">
			<div className="container mx-auto max-w-screen-sm card">
				<Card>
					<div className="block h-[180px]  w-full relative">
						<HeaderImage />
						<div className="max-w-[300px] absolute py-4 px-8">
							<h1 className="text-lg font-light text-CL_WHITE_LIGHT ">
								Formulário <br />
								para compra de <br />
							</h1>
							<h2 className="text-lg font-bold text-CL_WHITE_LIGHT ">Pacote de Stickers</h2>
						</div>
					</div>
					<StickerForm />
				</Card>
			</div>
		</main>
	);
}
