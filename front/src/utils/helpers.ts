export const setLocalStorage = (key: string, value: string) => {
	localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const removeLocalStorage = (key: string) => {
	localStorage.removeItem(key);
};

const currencyFormatter = new Intl.NumberFormat('fr-BE', {
	currency: 'EUR',
	style: 'currency',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

export const formatCurrency = (value: number) => {
	return currencyFormatter.format(value);
};

const dateFormatter = new Intl.DateTimeFormat('fr-BE', {
	year: 'numeric',
	month: 'long',
	day: '2-digit',
});

export const formatDate = (value: Date) => {
	const date = new Date(value);
	return dateFormatter.format(date);
};

export const mergeObjects = (obj1: any, obj2: any) => {
	return Object.assign({}, obj1, obj2);
};
