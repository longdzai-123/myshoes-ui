import { httpRequest } from "../utils/axios";

export const ProductAll = () => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'product/all',
        headers: {}
    };

    return httpRequest.request(config)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
        });
}

export const ProductById = (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `product/${id}`,
        headers: {}
    };

    return httpRequest.request(config)
        .then((response) => {
            // console.log(JSON.stringify(response.data.data));
            return response.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
}