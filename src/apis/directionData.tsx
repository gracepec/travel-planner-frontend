import { DirectionDataType } from "../types/DirectionDataType";
import instance from "./instance";

interface FetchDirectionDataParams {
    place1: string;
    place2: string;
}

const fetchDirectionData = async ({
    place1,
    place2,
}: FetchDirectionDataParams) => {
    try {
        const res = await instance.get<DirectionDataType>(`/direction/data`, {
            params: {
                place1,
                place2,
            },
        });
        return res.data;
    } catch (error) {
        console.log({
            success: false,
            message: "Error fetching direction-data",
            error,
        });
        throw error;
    }
};

export default fetchDirectionData;
