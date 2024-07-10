import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal as NModal,
} from "@nextui-org/react"
import { FC, ReactNode } from "react"
import { Button } from "../Button/Button"

type Props = {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
  headerTitle?: string
}

export const Modal: FC<Props> = ({
  isOpen = false,
  onClose = () => null,
  children,
  headerTitle,
}) => {
  return (
    <NModal size="lg" isOpen={isOpen} onClose={onClose} backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {headerTitle}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                onPress={onClose}
                type="button"
              >
                Закрыть
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </NModal>
  )
}
