import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchMovies = async () => {
    const response = await axios.get(`${apiBaseUrl}api_key=${apiKey}`);
    console.log(response)
    return response.data.results;
}