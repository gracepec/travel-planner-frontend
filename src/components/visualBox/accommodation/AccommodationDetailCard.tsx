import { AccommodationType } from "../../../types/AccommodationType";
import ButtonCard from "../../ui/ButtonCard";
import PriceCard from "../../ui/PriceCard";
import AccommodationAddress from "./AccommodationAddress";
import "./AccommodationDetailCard.scss";
import AccommodationRate from "./AccommodationRate";

interface AirTicketDetailCardProps {
    data: AccommodationType;
}

const AccommodationDetailCard = ({ data }: AirTicketDetailCardProps) => {
    return (
        <div className="detail-acc">
            <div className="image">
                <img src={data.photo} alt={""} />
            </div>
            <div className="title">{data.name}</div>

            <AccommodationAddress data={data}></AccommodationAddress>

            <AccommodationRate data={data}></AccommodationRate>

            <PriceCard
                price={data.price}
                title={"Accommodation Price"}
            ></PriceCard>

            <ButtonCard data={data.url} content={"숙소 예매하기"}></ButtonCard>
        </div>
    );
};

export default AccommodationDetailCard;
