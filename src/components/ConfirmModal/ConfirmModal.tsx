import { useTranslation } from 'react-i18next'

import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

interface ConfirmModalProps {
	isOpen: boolean
	onClose: () => void
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
	isOpen,
	onClose
}): JSX.Element => {
	const { t } = useTranslation('filter')

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent
				display="flex"
				flexDir="column"
				gap={10}
			>
				<ModalHeader
					borderBottom="none"
					color="#31393C"
				>
					{t('confirmQuestion')}
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody
					display="flex"
					justifyContent="center"
					gap={4}
				>
					<Button
						onClick={onClose}
						minW={180}
						bg="white"
						color="#474747"
						border="2px solid #B4B4B4"
					>
						{t('confirmOld')}
					</Button>
					<Button
						minW={180}
						bg="#FF5F00"
						color="white"
						_hover={{
							bg: 'white',
							color: 'black',
							border: '2px solid #B4B4B4'
						}}
					>
						{t('confirmNew')}
					</Button>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
