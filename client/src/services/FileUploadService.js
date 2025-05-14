import axiosInstance from "../AxiosConfig"


export const uploadFiles = async (formdata) => {
    const result = await axiosInstance.post('upload/multiple-upload', formdata, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return  result.data;
}