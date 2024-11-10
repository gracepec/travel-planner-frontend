import { AccommodationType } from "../types/AccommodationType";
import instance from "./instance";

interface FetchAccommodationDataParams {
    location: string;
    start_date: string;
    end_date: string;
}

const fetchAccommodationData = async ({
    location,
    start_date,
    end_date,
}: FetchAccommodationDataParams) => {
    try {
        const res = await instance.get<AccommodationType[]>(
            `/accommodation/data`,
            {
                params: {
                    location,
                    start_date,
                    end_date,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log({
            success: false,
            message: "Error fetching accommodation-data",
            error,
        });
        throw error;
    }
};

export default fetchAccommodationData;
