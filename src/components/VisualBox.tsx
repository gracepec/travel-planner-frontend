import "./VisualBox.scss";
import AirTicketContainer from "./AirTicketContainer";
import DayPlanContainer from "./DayPlanContainer";
import AccommodationContainer from "./AccommodationContainer";

const VisualBox = () => {
    return (
        <div className="box-container">
            <header>
                <h1>Travel to TOKYO</h1>
            </header>
            <div className="content">
                <AirTicketContainer />
                <DayPlanContainer />
                <AccommodationContainer />
            </div>
        </div>
    );
};

export default VisualBox;
