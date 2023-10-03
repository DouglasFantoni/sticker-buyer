import {STICKER_LIST} from '@/app/_constants/stickers';
import StickerItem from './StickerItem';

export default function StickerItemList() {
	const lastIndex = STICKER_LIST[STICKER_LIST.length - 1];
	return (
		<ul>
			{STICKER_LIST.slice(0, -1).map(sticker => (
				<li key={sticker.id}>
					<StickerItem name={sticker.name} formName={sticker.formName} />
					<div className="border-b-CL_GRAY border-b-2 my-4" />
				</li>
			))}
			{/* Renderizar o último item sem a borda */}
			<li key={lastIndex.id}>
				<StickerItem name={lastIndex.name} formName={lastIndex.formName} />
			</li>
		</ul>
	);
}
