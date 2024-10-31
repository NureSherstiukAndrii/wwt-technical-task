import { Box, Checkbox, Divider, Flex, Text } from '@chakra-ui/react'

import { FilterChoose } from '@api/types/Filter'

export const FilterItem: React.FC<FilterChoose> = ({ id, name, options }) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			gap={4}
		>
			<Text fontSize="xl">{name}</Text>
			<Flex
				w="100%"
				wrap="wrap"
				gap={3}
			>
				{options.map(({ name }) => (
					<Checkbox
						key={id}
						id={id}
						width="30%"
						size="sm"
						borderRadius="5px"
					>
						{name}
					</Checkbox>
				))}
			</Flex>
			<Divider height="2px" />
		</Box>
	)
}
