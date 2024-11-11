import "./ButtonCard.scss";

interface ButtonCardProps {
    data: string;
    content: string;
}

const ButtonCard = ({ data, content }: ButtonCardProps) => {
    return (
        <div
            className="card-button"
            onClick={() => window.open(data, "_blank")}
        >
            <div className="top">
                <div className="title">{content}</div>
            </div>
        </div>
    );
};

export default ButtonCard;
