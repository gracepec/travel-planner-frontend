import axios from "axios";
import { FlightType } from "../types/FlightType";

interface FetchFlightDataParams {
  queryParams: string;
  flightType: string;
}

const fetchFlightData = async ({
  queryParams,
  flightType,
}: FetchFlightDataParams): Promise<FlightType[]> => {
  const baseUrl = process.env.REACT_APP_SERVER_URL;

  console.log("fetchFlightData: ", queryParams);

  try {
    const res = await axios.get(
      `${baseUrl}/api/v1/flight/${flightType}/data?${queryParams}`
    );
    console.log(res);
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
