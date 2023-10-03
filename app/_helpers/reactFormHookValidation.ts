import {UseControllerProps} from 'react-hook-form';

declare type RfkValidationOptions = UseControllerProps['rules'];

declare type HookFormValidation = {[key in keyof RfkValidationOptions]: RfkValidationOptions};

export const lenght = (value: number, valueText?: number): HookFormValidation => ({
	...minLength(value, valueText),
	...maxLenght(value, valueText),
});

export const maxLenght = (value: number, valueText?: number | string) => {
	return {
		maxLenght: {
			message: `Deve ter no máximo ${valueText ?? value} caracteres`,
			value: value,
		},
	};
};

export const minLength = (value: number, valueText?: number): HookFormValidation => {
	return {
		minLength: {
			message: `Deve ter no mínimo ${valueText ?? value} caracteres`,
			value: value,
		},
	};
};

export const required = (): HookFormValidation => ({
	required: {
		message: 'Obrigatório',
		value: true,
	},
});

export const isEmail: HookFormValidation = {
	pattern: {
		value: /\S+@\S+\.\S+/,
		message: 'Deve ser um e-mail válido',
	},
};

export const isCep: HookFormValidation = {
	...lenght(9, 8),
	pattern: {
		value: /^[0-9]{5}-[0-9]{3}$/,
		message: 'Deve ser um CEP válido',
	},
};

export const isPhone: HookFormValidation = {
	...lenght(15, 11),
	pattern: {
		value: /^\([1-9]{2}\) [0-9]{5}\-[0-9]{4}$/,
		message: 'Deve ser um telefone válido',
	},
};
