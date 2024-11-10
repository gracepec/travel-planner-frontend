import { AccommodationType } from "../../../types/AccommodationType";
import "./AccommodationDetailCard.scss";

interface AirTicketDetailCardProps {
    data: AccommodationType;
}

const AccommodationDetailCard = ({ data }: AirTicketDetailCardProps) => {
    return (
        <div className="detail-acc">
            <div className="image">
                <img src={data.photo} alt={""} />
            </div>
            <div className="subtitle">{data.name}</div>
            <div className="detail">{data.location}</div>
            <div className="title">{data.price}</div>
            <div className="detail">{data.rate}점</div>
            <button onClick={() => window.open(data.url, "_blank")}>
                이동하기
            </button>
            <button>확정하기</button>
        </div>
    );
};

export default AccommodationDetailCard;
