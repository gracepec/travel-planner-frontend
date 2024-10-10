import "./OptionCard.scss";
import LoadingCircle from "../ui/LoadingCircle";

interface OptionCardProps {
    title: string;
    price: number;
    times: string[];
}

const OptionCard = ({ title, price, times }: OptionCardProps) => {
    return (
        <div className="card">
            <div className="subtitle">{title}</div>
            <div className="image">
                <LoadingCircle />
            </div>
            <div className="title">{price.toLocaleString()} 원</div>
            <div className="detail">
                <div>{times[0]}</div>
                <div>{times[1]}</div>
            </div>
        </div>
    );
};

export default OptionCard;
