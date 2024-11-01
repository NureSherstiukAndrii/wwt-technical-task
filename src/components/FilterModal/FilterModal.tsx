import { useTranslation } from 'react-i18next'

import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure
} from '@chakra-ui/react'

import { FilterType } from '@api/types/Filter'

import { ConfirmModal } from '@components/ConfirmModal'
import { useFiltersStore } from '@store/store'

import { FilterItem } from './FilterItem'

interface FilterModalProps {
	isModalOpen: boolean
	onCloseModal: () => void
}

export const FilterModal: React.FC<FilterModalProps> = ({
	isModalOpen,
	onCloseModal
}) => {
	const { t } = useTranslation('filter')
	const { isOpen, onOpen, onClose } = useDisclosure()
	const allFilters = useFiltersStore(state => state.allFilters)
	const resetFilters = useFiltersStore(state => state.resetFilters)
	const confirmFilters = useFiltersStore(state => state.confirmFilters)
	const discardFilters = useFiltersStore(state => state.discardFilters)
	const resetTempFilters = useFiltersStore(state => state.resetTempFilters)

	const handleConfirmNew = () => {
		confirmFilters()
		onClose()
		onCloseModal()
	}

	const handleConfirmOld = () => {
		discardFilters()
		onClose()
	}

	return (
		<>
			<ConfirmModal
				isOpen={isOpen}
				onClose={onClose}
				onConfirm={handleConfirmNew}
				onDiscard={handleConfirmOld}
			/>

			<Modal
				isOpen={isModalOpen}
				onClose={onCloseModal}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{t('filter')}</ModalHeader>
					<ModalCloseButton onClick={resetTempFilters} />
					<ModalBody
						display="flex"
						flexDirection="column"
						gap={4}
					>
						{allFilters ? (
							allFilters.map(filter => (
								<FilterItem
									key={filter.id}
									id={filter.id}
									name={filter.name}
									options={filter.options}
									type={FilterType.OPTION}
								/>
							))
						) : (
							<p>{t('noFilter')}</p>
						)}
					</ModalBody>

					<ModalFooter
						position="relative"
						display="flex"
						justifyContent="center"
						width="100%"
					>
						<Button
							bg="#FF5F00"
							mr={3}
							color="white"
							onClick={onOpen}
							_hover={{
								bg: 'white',
								color: 'black',
								border: '2px solid #B4B4B4'
							}}
							width={150}
						>
							{t('apply')}
						</Button>
						<Button
							color="#078691"
							textDecoration="underline"
							bg="none"
							_hover="none"
							position="absolute"
							right="0"
							onClick={resetFilters}
						>
							{t('clearAllParameters')}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
