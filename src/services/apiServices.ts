import { ApiError, FetchError } from "../errorHandlers/errorHandler.js";
import Country from "../model/Country.js";

export default async function getCountryList(url: string): Promise<Country[]> {
  try {
    //time in ms for fetch timeout
    const fetchTimeout = {signal: AbortSignal.timeout(5000)}
    const data = await fetch(url, fetchTimeout);
    if (!data.ok) {
      const error = await data.json();
      throw new ApiError(
        `${error.message}, refresh to try again.  If problem persists, please contact web administrator`
      );
    }
    const result = await data.json();
    return result;
  } catch (error: any) {
    if (error instanceof ApiError) throw error;
    throw new FetchError(
      "Failed to retrieve country data, please refresh to try again.  If problem persists, please contact web administrator"
    );
  }
}
