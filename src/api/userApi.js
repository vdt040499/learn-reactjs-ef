import axiosClient from "./axiosClient";

const productApi = {
    register(data) {
        const url = '/auth/local/register';
        return axiosClient.post(url, data);
    },
};  

export default productApi;