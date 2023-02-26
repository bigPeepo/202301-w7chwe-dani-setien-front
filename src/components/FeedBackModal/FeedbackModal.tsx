import { Dispatch, SetStateAction } from "react";
import { Modal } from "react-bootstrap";

interface FeedbackModalProps {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  isModalVisible: boolean;
  modalHeading: string;
  modalBody: string;
}

const FeedbackModal = ({
  setIsModalVisible,
  isModalVisible,
  modalBody,
  modalHeading,
}: FeedbackModalProps): JSX.Element => {
  return (
    <Modal show={isModalVisible} onHide={() => setIsModalVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{modalHeading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default FeedbackModal;
