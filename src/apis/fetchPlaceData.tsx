import { PlaceDataType } from "../types/PlaceDataType";
import instance from "./instance";

interface FetchPlaceDataParams {
    place: string;
}

const fetchPlaceData = async ({ place }: FetchPlaceDataParams) => {
    try {
        const res = await instance.get<PlaceDataType>(`/place/data`, {
            params: {
                place,
            },
        });
        return res.data;
    } catch (error) {
        console.log({
            success: false,
            message: "Error fetching place-data",
            error,
        });
        throw error;
    }
};

export default fetchPlaceData;
