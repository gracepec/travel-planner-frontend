import { FlightType } from "../types/FlightType";
import instance from "./instance";

interface FetchFlightDataParams {
    origin: string;
    destination: string;
    start_date: string;
    end_date: string;
}

const fetchFlightData = async ({
    origin,
    destination,
    start_date,
    end_date,
}: FetchFlightDataParams) => {
    try {
        const res = await instance.get<FlightType[]>(`/flight/data`, {
            params: {
                origin,
                destination,
                start_date,
                end_date,
            },
        });
        return res.data;
    } catch (error) {
        console.log({
            success: false,
            message: "Error fetching flight-data",
            error,
        });
        throw error;
    }
};

export default fetchFlightData;
