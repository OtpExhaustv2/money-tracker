import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React from 'react';

interface IconProps extends FontAwesomeIconProps {}

const Icon: React.FC<IconProps> = (props) => {
	return <FontAwesomeIcon {...props} />;
};

export default Icon;
