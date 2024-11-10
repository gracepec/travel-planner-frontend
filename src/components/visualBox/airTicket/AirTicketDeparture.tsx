import { FlightType } from "../../../types/FlightType";
import "./AirTicketDeparture.scss";

interface AirTicketDepartureProps {
    data: FlightType;
}

const AirTicketDeparture = ({ data }: AirTicketDepartureProps) => {
    return (
        <div className="ticket">
            <div className="top">
                <div className="title">AirLine Ticket Departure</div>
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

export default AirTicketDeparture;
