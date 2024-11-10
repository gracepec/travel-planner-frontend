import AccommodationDetailCard from "./AccommodationDetailCard";
import { AccommodationType } from "../../../types/AccommodationType";
import { ImCross } from "react-icons/im";
import "./AccommodationModal.scss";

interface ModalProps {
    data: AccommodationType | null;
    open: boolean;
    close: () => void;
}

const AccommodationModal = ({ data, open, close }: ModalProps) => {
    if (!open || !data) return null;

    return (
        <div className="modal">
            <AccommodationDetailCard data={data}></AccommodationDetailCard>
            <button className="button" onClick={close}>
                <ImCross />
            </button>
        </div>
    );
};

export default AccommodationModal;
