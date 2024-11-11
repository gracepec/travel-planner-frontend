import { useState } from "react";
import { FlightType } from "../../../types/FlightType";
import { useRecoilValue } from "recoil";
import { selectedIndexState } from "../../../recoils/atoms";
import AirTicketDeparture from "./AirTicketDeparture";
import AirTicketReturn from "./AirTicketReturn";
import PriceCard from "../../ui/PriceCard";
import ButtonCard from "../../ui/ButtonCard";
import plane_1 from "../../../img/plane_1.jpg";
import plane_2 from "../../../img/plane_2.jpg";
import plane_3 from "../../../img/plane_3.jpg";
import plane_4 from "../../../img/plane_4.jpg";
import plane_5 from "../../../img/plane_5.jpg";
import "./AirTicketDetailCard.scss";

interface AirTicketDetailCardProps {
    data: FlightType;
}

const AirTicketDetailCard = ({ data }: AirTicketDetailCardProps) => {
    const planeImages = [plane_1, plane_2, plane_3, plane_4, plane_5];
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const selectedIndex = useRecoilValue(selectedIndexState);

    return (
        <div className="detail-fli">
            <div className="cover-image">
                {isLoading && <div className="placeholder"></div>}
                <img
                    src={planeImages[selectedIndex]}
                    alt={""}
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="title-container">
                <div className="title">{data.airline}</div>
                <div className="image">
                    <img src={data.airline_logo} alt={""} />
                </div>
            </div>

            <AirTicketDeparture data={data}></AirTicketDeparture>

            <AirTicketReturn data={data}></AirTicketReturn>

            <PriceCard
                price={"₩" + data.price}
                title={"AirLine Ticket Price"}
            ></PriceCard>

            <ButtonCard data={data.url} content={"티켓 구매하기"}></ButtonCard>
        </div>
    );
};

export default AirTicketDetailCard;
