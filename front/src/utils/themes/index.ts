import { StandardLonghandProperties as CSS } from 'csstype';

export type Theme = {
	background: CSS['backgroundColor'];
	color: CSS['color'];
};

export const LightTheme: Theme = {
	background: 'white',
	color: '#000',
};

export const DarkTheme: Theme = {
	background: 'black',
	color: '#fff',
};
