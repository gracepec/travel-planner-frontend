import "./AirTicketContainer.scss";

interface FlightOption {
    airline: string;
    price: number;
    times: string[];
}

const AirTicketContainer: React.FC = () => {
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
        <div className="air-ticket">
            <h2>Air Ticket</h2>
            <div className="options">
                {flightOptions.map((flight, index) => (
                    <div key={index} className="option">
                        <h3>{flight.airline}</h3>
                        <p className="price">
                            {flight.price.toLocaleString()} 원
                        </p>
                        <ul>
                            {flight.times.map((time, idx) => (
                                <li key={idx}>{time}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AirTicketContainer;
