import { useTranslation } from 'react-i18next'

import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

interface FilterModalProps {
	isModalOpen: boolean
	onCloseModal: () => void
}

export const FilterModal: React.FC<FilterModalProps> = ({
	isModalOpen,
	onCloseModal
}) => {
	const { t } = useTranslation()

	return (
		<Modal
			isOpen={isModalOpen}
			onClose={onCloseModal}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{t('filter')}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{t('content')}</ModalBody>

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
					>
						{t('clearAllParameters')}
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
