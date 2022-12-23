export const setLocalStorage = (key: string, value: string) => {
	localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const removeLocalStorage = (key: string) => {
	localStorage.removeItem(key);
};

const numberFormatter = new Intl.NumberFormat('fr-BE', {
	currency: 'EUR',
	style: 'currency',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

export const formatCurrency = (value: number) => {
	return numberFormatter.format(value);
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
