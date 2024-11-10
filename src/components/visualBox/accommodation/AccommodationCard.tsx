import { useSetRecoilState } from "recoil";
import { selectedAccommodationState } from "../../../recoils/atoms";
import { AccommodationType } from "../../../types/AccommodationType";
import "./AccommodationCard.scss";

interface AccommodationCardProps {
    data: AccommodationType;
    isModal: boolean;
    onClick: () => void;
}

const AccommodationCard = ({
    data,
    isModal,
    onClick,
}: AccommodationCardProps) => {
    const setSelectedAccommodationState = useSetRecoilState(
        selectedAccommodationState
    );

    const handleClick = () => {
        setSelectedAccommodationState(data);
        onClick();
    };

    return (
        <div
            className={isModal ? "card-acc-small" : "card-acc"}
            onClick={handleClick}
        >
            <div className="image">
                <img src={data.photo} alt={""} />
            </div>
            <div className="subtitle">{data.name}</div>
            <div className="title">{data.price}</div>
            <div className="detail">{data.rate}점</div>
        </div>
    );
};

export default AccommodationCard;
