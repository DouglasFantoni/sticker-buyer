import {STICKER_LIST} from '@/app/_constants/stickers';
import StickerItem from './StickerItem';

interface IStickerItemListProps {}

export default function StickerItemList({}: IStickerItemListProps) {
	return (
		<div>
			{STICKER_LIST.map((sticker, index) => (
				<div key={sticker.id} className="block">
					<StickerItem name={sticker.name} formName={sticker.formName} />
					{index + 1 !== STICKER_LIST.length ? <div className="border-b-CL_GRAY border-b-[1px] my-4" /> : null}
				</div>
			))}
		</div>
	);
}

{
	/* <Checkbox
										label={<H4>{sticker.name}</H4>}
										defaultChecked
										crossOrigin
										ripple={false}
										className="w-6 h-6 bg-CL_BLUE_DARK checked:bg-CL_BLUE_DARK hover:bg-CL_BLUE_DARKHOVER"
									/> */
}
