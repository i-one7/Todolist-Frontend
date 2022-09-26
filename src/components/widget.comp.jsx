import { Box, useColorModeValue, VStack } from '@chakra-ui/react';

const Widget = (props) => {
	const { children } = props;
	const config = {
		bg: useColorModeValue('light.100', 'dark.700'),
		rounded: 'md',
		maxW: 'xl',
		w: 'full',
		px: 4,
	};

	return (
		<Box {...config}>
			{children}
		</Box>
	);
};

const WidgetHeader = (props) => {
	const { children } = props;
	const config = {
		w: 'full'
	}
	return (
		<Box {...config}>
			{children}
		</Box>
	);
};

const WidgetBody = (props) => {
	const { children } = props;

	const config = {
		overflowY: 'auto',
		display: 'block',
		rounded: 'md',
		h: '16rem',
		w: 'full',
		sx: {
			'::-webkit-scrollbar': {
				display: 'none'
			},
		},
	};

	return (
		<Box {...config}>
			{children}
		</Box>
	);
};

const WidgetFooter = (props) => {
	const { children } = props;
	const config = {
		w: 'full'
	}
	return (
		<Box {...config}>
			{children}
		</Box>
	)
}

export { Widget, WidgetBody, WidgetHeader, WidgetFooter };