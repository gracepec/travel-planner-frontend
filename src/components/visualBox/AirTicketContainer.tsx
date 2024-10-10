import "./OptionContainer.scss";
import OptionCard from "./OptionCard";

interface FlightOption {
    airline: string;
    price: number;
    times: string[];
}

const AirTicketContainer = () => {
    const flightOptions: FlightOption[] = [
        {
            airline: "에어서울",
            price: 309600,
            times: ["24/10/15 07:50 - 10:30", "24/10/18 20:05 - 22:50"],
        },
        {
            airline: "에어부산",
            price: 333800,
            times: ["24/10/15 07:35 - 10:05", "24/10/18 19:20 - 22:00"],
        },
        {
            airline: "이스타항공 / 제주항공",
            price: 275750,
            times: ["24/10/15 07:45 - 10:15", "24/10/18 16:55 - 20:00"],
        },
    ];

    return (
        <div className="option-container">
            <header>Air Ticket</header>
            <div className="options">
                {flightOptions.map((flight, index) => (
                    <OptionCard
                        key={index}
                        title={flight.airline}
                        price={flight.price}
                        times={flight.times}
                    />
                ))}
            </div>
        </div>
    );
};

export default AirTicketContainer;
