import "./OptionContainer.scss";
import OptionCard from "./OptionCard";

interface AccommodationOptions {
    accommodation: string;
    price: number;
    times: string[];
}

const AccommodationContainer = () => {
    const accommodationOptions: AccommodationOptions[] = [
        {
            accommodation: "도쿄 호텔",
            price: 309600,
            times: ["24/10/15", "24/10/18"],
        },
        {
            accommodation: "도쿄 호스텔",
            price: 275750,
            times: ["24/10/15", "24/10/18"],
        },
        {
            accommodation: "고급 호텔",
            price: 442300,
            times: ["24/10/15", "24/10/18"],
        },
    ];

    return (
        <div className="option-container">
            <header>Accommodation</header>
            <div className="options">
                {accommodationOptions.map((accommodation, index) => (
                    <OptionCard
                        key={index}
                        title={accommodation.accommodation}
                        price={accommodation.price}
                        times={accommodation.times}
                    />
                ))}
            </div>
        </div>
    );
};

export default AccommodationContainer;
