import { AccommodationType } from "../../../types/AccommodationType";
import "./AccommodationAddress.scss";

interface AccommodationAddressProps {
    data: AccommodationType;
}

const AccommodationAddress = ({ data }: AccommodationAddressProps) => {
    return (
        <div className="acc-address">
            <div className="top">
                <div className="title">Accommodation Location</div>
            </div>
            <div className="details">
                <div>{data.location}</div>
            </div>
        </div>
    );
};

export default AccommodationAddress;
