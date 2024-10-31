import { useTranslation } from 'react-i18next'

import { AbsoluteCenter, Box, Button, useDisclosure } from '@chakra-ui/react'

import { FilterModal } from '@components/FilterModal'

export const App = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { t } = useTranslation()

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
