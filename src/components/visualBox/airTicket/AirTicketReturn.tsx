import { FlightType } from "../../../types/FlightType";
import "./AirTicketReturn.scss";

interface AirTicketReturnProps {
    data: FlightType;
}

const AirTicketReturn = ({ data }: AirTicketReturnProps) => {
    return (
        <div className="ticket-return">
            <div className="top">
                <div className="title">AirLine Ticket Arrival</div>
            </div>
            <div className="course">
                <div>{data.rtn_dpt_apt + " - " + data.rtn_arv_apt}</div>
            </div>
            <div className="detail">
                <div>{data.rtn_dpt_time + " - " + data.rtn_arv_time}</div>
            </div>
            <div className="detail">
                <div>{data.rtn_time}</div>
            </div>
        </div>
    );
};

export default AirTicketReturn;
