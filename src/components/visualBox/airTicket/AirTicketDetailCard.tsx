import { useState } from "react";
import { FlightType } from "../../../types/FlightType";
import { useRecoilValue } from "recoil";
import { selectedIndexState } from "../../../recoils/atoms";
import AirTicketDeparture from "./AirTicketDeparture";
import AirTicketReturn from "./AirTicketReturn";
import plane_1 from "../../../img/plane_1.jpg";
import plane_2 from "../../../img/plane_2.jpg";
import plane_3 from "../../../img/plane_3.jpg";
import plane_4 from "../../../img/plane_4.jpg";
import plane_5 from "../../../img/plane_5.jpg";
import "./AirTicketDetailCard.scss";
import PriceCard from "../../ui/PriceCard";

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

            <PriceCard data={data.price}></PriceCard>

            <button onClick={() => window.open(data.url, "_blank")}>
                이동하기
            </button>
            <button>확정하기</button>
        </div>
    );
};

export default AirTicketDetailCard;
