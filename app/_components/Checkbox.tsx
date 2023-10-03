import {FC, useState} from 'react';

interface CustomCheckboxProps {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}

const Checkbox: FC<CustomCheckboxProps> = ({checked = false, onChange}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleCheckboxChange = () => {
		const newChecked = !isChecked;
		setIsChecked(newChecked);
		if (onChange) {
			onChange(newChecked);
		}
	};

	return (
		<div className="relative">
			<input type="checkbox" className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
			<div className={`w-5 h-5 border rounded cursor-pointer ${isChecked ? 'bg-CL_BLUE_DARK' : 'bg-CL_BLUE_DARK'}`} onClick={handleCheckboxChange}>
				{isChecked && (
					<svg className="w-4 h-4 mx-auto my-0.5 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
					</svg>
				)}
			</div>
		</div>
	);
};

export default Checkbox;
