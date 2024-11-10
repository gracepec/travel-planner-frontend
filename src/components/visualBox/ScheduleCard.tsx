import "./airTicket/AirTicketCard.scss";
import LoadingCircle from "../ui/LoadingCircle";

interface ScheduleCardProps {
    title: string;
    time: string;
    detail: string;
    url: string;
    isTransport: boolean;
}

const ScheduleCard = ({
    title,
    time,
    detail,
    url,
    isTransport,
}: ScheduleCardProps) => {
    return (
        <div className="card-fli">
            <img
                className="image"
                src="https://placehold.co/600x400"
                alt=""
                title="place_image"
            ></img>
            <div className="subtitle">{title}</div>
            <div className="detail">{time}</div>
            <div className="detail">{detail}</div>
        </div>
    );
};

export default ScheduleCard;
