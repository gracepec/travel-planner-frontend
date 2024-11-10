import AirTicketDetailCard from "./AirTicketDetailCard";
import { FlightType } from "../../../types/FlightType";
import { ImCross } from "react-icons/im";
import "./AirTicketModal.scss";

interface ModalProps {
    data: FlightType | null;
    open: boolean;
    close: () => void;
}

const AirTicketModal = ({ data, open, close }: ModalProps) => {
    if (!open || !data) return null;

    return (
        <div className="modal">
            <button className="button" onClick={close}>
                <ImCross />
            </button>
            <AirTicketDetailCard data={data}></AirTicketDetailCard>
        </div>
    );
};

export default AirTicketModal;
