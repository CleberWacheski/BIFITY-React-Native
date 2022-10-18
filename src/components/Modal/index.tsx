import { Text, View } from "react-native"
import { SelectCoinModal } from "../SelectCoinModal";
import {
    Modal,
    ModalContent

} from "./style"

interface ModalComponentProps {
    visible: boolean;
}

export const ModalComponent = ({ visible }: ModalComponentProps) => {
    return (

        <Modal
            animationType="slide"
            //transparent={true}
            visible={true}
        >
            <ModalContent>
                <SelectCoinModal />

            </ModalContent>
        </Modal>
    )
}