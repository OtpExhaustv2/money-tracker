import React, { PropsWithChildren } from 'react';

interface ConditionnalParentProps extends PropsWithChildren {
	condition?: boolean;
	parentIfTrue: keyof JSX.IntrinsicElements;
	parentIfFalse: keyof JSX.IntrinsicElements;
	parentIfTrueProps?: any;
	parentIfFalseProps?: any;
}

const ConditionnalParent: React.FC<ConditionnalParentProps> = ({
	condition,
	parentIfTrue,
	parentIfTrueProps,
	parentIfFalse,
	parentIfFalseProps,
	children,
}) => {
	const Parent = condition ? parentIfTrue : parentIfFalse;
	const props = condition ? parentIfTrueProps : parentIfFalseProps;

	return <Parent {...props}>{children}</Parent>;
};

export default ConditionnalParent;
