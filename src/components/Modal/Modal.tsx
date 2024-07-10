import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal as NModal,
} from "@nextui-org/react"
import { FC, ReactNode } from "react"
import { Button } from "../Button/Button"
import cls from "./Modal.module.scss"
 
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
    <NModal size="lg" isOpen={isOpen} onClose={onClose} backdrop="blur" className={cls.Modal}>
      <ModalContent className={cls.Modal__form}>
        {(onClose) => (
          <>
            <ModalHeader className={cls.Modal__form__header}>
              {headerTitle}
            </ModalHeader>
            <ModalBody className={cls.Modal__form__body}>{children}</ModalBody>
            {/* <ModalFooter className={cls.Modal__form__footer}>
              <Button
                color="danger"
                variant="flat"
                onPress={onClose}
                type="button"
              >
                Закрыть
              </Button>
            </ModalFooter> */}
          </>
        )}
      </ModalContent>
    </NModal>
  )
}
