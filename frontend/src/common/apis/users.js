import axios from "axios";


export const loginUser = async (body) => {
    try {
        const data = await axios.post(`http://localhost:4154/api/user/login`, body);
        return data.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
}


export const addUser = async (body) => {
    try {
        const data = await axios.post(`http://localhost:4154/api/user/add`, body);
        return data.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
}


export const getUserByToken = async (token) => {
    try {
        const data = await axios.post(`http://localhost:4154/api/user/me`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
}