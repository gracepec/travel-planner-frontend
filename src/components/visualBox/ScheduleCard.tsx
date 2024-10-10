import "./ScheduleCard.scss";
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
        <div className={`card ${isTransport ? "mini-card" : "card"}`}>
            <div className="image">
                <LoadingCircle />
            </div>
            <div className="title">{title}</div>
            <div className="subtitle">{time}</div>
        </div>
    );
};

export default ScheduleCard;
