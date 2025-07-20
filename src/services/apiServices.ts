import { FetchError } from "../errorHandlers/errorHandler";
import Country from "../model/Country";

export default async function getCountryList(url: string): Promise<Country[]> {
    try{
    const data = await fetch(url);
    const result = await data.json();
    return result;
    }
    catch{
        throw new FetchError("Failed to retrieve country data, please refresh to try again");
    }
}