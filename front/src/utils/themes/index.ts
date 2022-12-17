import { StandardLonghandProperties as CSS } from 'csstype';

export type Theme = {
	background: {
		primary: CSS['backgroundColor'];
		secondary: CSS['backgroundColor'];
		hover: CSS['backgroundColor'];
	};
	text: {
		primary: CSS['color'];
		secondary: CSS['color'];
		hover: CSS['color'];
	};
};

export const LightTheme: Theme = {
	background: {
		primary: 'white',
		secondary: '#f5f5f5',
		hover: '#e5e5e5',
	},
	text: {
		primary: '#000',
		secondary: '#999',
		hover: '#000',
	},
};

export const DarkTheme: Theme = {
	background: {
		primary: '#404258',
		secondary: '#474E68',
		hover: '#A3A6B3',
	},
	text: {
		primary: '#fff',
		secondary: '#999',
		hover: '#fff',
	},
};
