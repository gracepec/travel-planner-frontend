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
                <div>{data.dpt_dpt_apt + " - " + data.dpt_arv_apt}</div>
            </div>
            <div className="detail">
                <div>{data.dpt_dpt_time + " - " + data.dpt_arv_time}</div>
            </div>
            <div className="detail">
                <div>{data.dpt_time}</div>
            </div>
        </div>
    );
};

export default AirTicketDeparture;
