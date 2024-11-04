import "./OptionCard.scss";
import LoadingCircle from "../ui/LoadingCircle";

interface OptionCardProps {
    title: string;
    price: string;
    url: string;
    photo: string;
    times: string[];
    rate: string;
}

const OptionCard = ({
    title,
    price,
    url,
    photo,
    times,
    rate,
}: OptionCardProps) => {
    return (
        <div className="card">
            <div className="subtitle">{title}</div>
            <div className="image">
                <img src={photo} alt={""} width="100" />
            </div>
            <div className="title">{price} 원</div>
            <div className="detail">
                <div>{times[0]}</div>
                <div>{times[1]}</div>
            </div>
            <div className="detail">{rate}</div>
        </div>
    );
};

export default OptionCard;
