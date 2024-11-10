import "./PriceCard.scss";

interface PriceCardProps {
    data: string;
}

const PriceCard = ({ data }: PriceCardProps) => {
    return (
        <div className="card-price">
            <div className="top">
                <div className="title">AirLine Ticket Price</div>
            </div>
            <div className="detail">
                <div>₩{data}</div>
            </div>
        </div>
    );
};

export default PriceCard;
