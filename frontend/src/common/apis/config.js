import axios from "axios";

const token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}


export const getConfigsList = async (body) => {
    try {
        if (token) {
            const data = await axios.post(`http://localhost:4154/api/config/list`, body, { headers });
            return data.data;
        } else {
            return { success: false, message: 'Token not found' };
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const getConfigSingle = async (body) => {
    try {
        if (token) {
            const data = await axios.post(`http://localhost:4154/api/config/${body._id}`, {}, { headers });
            return data.data;
        } else {
            return { success: false, message: 'Token not found' };
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const updateConfigWithId = async (body) => {
    try {
        if (token) {
            const data = await axios.put(`http://localhost:4154/api/config/update`, body, { headers });
            return data.data;
        } else {
            return { success: false, message: 'Token not found' };
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const saveNewConfig = async (body) => {
    try {
        if (token) {
            const data = await axios.post(`http://localhost:4154/api/config/add`, body, { headers });
            return data.data;
        } else {
            return { success: false, message: 'Token not found' };
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const deleteConfig = async (body) => {
    try {
        if (token) {
            const data = await axios.delete(`http://localhost:4154/api/config/delete`, {
                headers: headers,
                data: body
            });
            return data.data;
        } else {
            return { success: false, message: 'Token not found' };
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}