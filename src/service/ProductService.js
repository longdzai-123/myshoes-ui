import { httpRequest } from "../utils/axios";

export const ProductAll = () => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'product/all',
        headers: {
        }
    };

    return httpRequest.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            return response.data
        })
        .catch((error) => {
            console.log(error);
        });
}