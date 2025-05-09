import axiosInstance from "../AxiosConfig"

export const loginUser = async (credentials) => {
    const response = await axiosInstance.post('', credentials);
    return response.data;
};

export const registerUser = async (data) => {
    const response = await axiosInstance.post('', data);
    return response.data;
}