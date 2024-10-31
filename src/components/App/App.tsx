import { useTranslation } from 'react-i18next'

import {
	AbsoluteCenter,
	Box,
	Button,
	Spinner,
	useDisclosure
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { FilterModal } from '@components/FilterModal'
import { useFiltersStore } from '@store/store'

export const App = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { t } = useTranslation('filter')
	const setFilters = useFiltersStore(state => state.setAllFilters)

	const fetchFilterData = async () => {
		const response = await fetch('./filterData.json')
		if (!response.ok) {
			throw new Error('Failed to fetch filter data')
		}

		const data = await response.json()
		setFilters(data.filterItems)
		console.log(data)

		return data
	}

	const { isPending, error } = useQuery({
		queryKey: ['filterData'],
		queryFn: fetchFilterData
	})

	if (isPending) {
		return <Spinner />
	}

	if (error) {
		return 'An error has occurred: ' + error.message
	}

	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<AbsoluteCenter>
				<Button
					size="lg"
					onClick={onOpen}
					bg="#FF5F00"
					color="white"
					_hover={{ bg: 'white', color: 'black', border: '2px solid grey' }}
				>
					{t('openFilters')}
				</Button>
			</AbsoluteCenter>

			<FilterModal
				isModalOpen={isOpen}
				onCloseModal={onClose}
			/>
		</Box>
	)
}
