import axiosInstance from "../AxiosConfig"

export const loginUser = async (credentials) => {
    const response = await axiosInstance.post('user/login', credentials);
    return response.data;
};

export const registerUser = async (data) => {
    const response = await axiosInstance.post('user/add-user', data);
    return response.data;
}