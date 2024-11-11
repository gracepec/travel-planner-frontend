import "./DirectionCard.scss";
import LoadingCircle from "../../ui/LoadingCircle";

interface DirectionCardProps {
    d1: string;
    d2: string;
    isModal: boolean;
    onClick: () => void;
}

const DirectionCard = ({ d1, d2, isModal, onClick }: DirectionCardProps) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <div
            className={isModal ? "card-dir-small" : "card-dir"}
            onClick={handleClick}
        >
            <img
                className="image"
                src="https://placehold.co/600x400"
                alt=""
                title="place_image"
            ></img>
            <div className="subtitle">이동</div>
        </div>
    );
};

export default DirectionCard;
