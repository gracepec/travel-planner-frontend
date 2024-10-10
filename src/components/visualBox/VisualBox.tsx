import "./VisualBox.scss";
import AirTicketContainer from "./AirTicketContainer";
import ScheduleContainer from "./ScheduleContainer";
import AccommodationContainer from "./AccommodationContainer";

const VisualBox = () => {
    return (
        <div className="visual-container">
            <header>Travel to TOKYO</header>
            <div className="visual-content">
                <AirTicketContainer />
                <ScheduleContainer />
                <AccommodationContainer />
            </div>
        </div>
    );
};

export default VisualBox;
