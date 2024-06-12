import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search-ticker?query=AA&limit=10&exchange=NASDAQ?apikey=${process.env.REACT_API_KEY}`);
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("Axios error: ", error.message);
            return error.message;
        } else {
            console.log("Unexpected error: ", error)
            return "An unexpected error has occured.";
        }
    }
}