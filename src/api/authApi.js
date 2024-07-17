import { BASE_URL } from "../components/AppContents";
import apiHandler from "../Helper/apiHandler";

export const signup = async (data) => {
    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await apiHandler.post(`${BASE_URL}/register`, data, options)
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const login = () => { }