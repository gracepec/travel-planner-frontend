import { FlightType } from "../types/FlightType";
import instance from "./instance";

interface FetchFlightDataParams {
  flight_type: string;
  dpt_apt: string;
  arv_apt: string;
  start_date: string;
  end_date: string;
}

const fetchFlightData = async ({
  flight_type,
  dpt_apt,
  arv_apt,
  start_date,
  end_date,
}: FetchFlightDataParams) => {
  try {
    const res = await instance.get<FlightType[]>(
      `/flight/${flight_type}/data`,
      {
        params: {
          dpt_apt,
          arv_apt,
          start_date,
          end_date,
        },
      }
    );
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
