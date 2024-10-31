import { Box, Checkbox, Divider, Flex, Text } from '@chakra-ui/react'

import { FilterChoose } from '@api/types/Filter'

import { useFiltersStore } from '@store/store'

export const FilterItem: React.FC<FilterChoose> = ({ id, name, options }) => {
	const updateSelectedFilters = useFiltersStore(
		state => state.updateSelectedFilters
	)
	const selectedOptions = useFiltersStore(
		state => state.selectedFilters[id] || []
	)

	const handleCheckboxChange = (optionId: string, isChecked: boolean) => {
		const updatedOptions = isChecked
			? [...selectedOptions, { id: optionId, name }]
			: selectedOptions.filter(option => option.id !== optionId)
		updateSelectedFilters(id, updatedOptions)
	}

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
				{options.map(({ id: optionId, name }) => (
					<Checkbox
						key={optionId}
						width="30%"
						size="sm"
						borderRadius="5px"
						isChecked={selectedOptions.some(option => option.id === optionId)}
						onChange={e => handleCheckboxChange(optionId, e.target.checked)}
					>
						{name}
					</Checkbox>
				))}
			</Flex>
			<Divider />
		</Box>
	)
}
