import { httpRequest } from "../utils/axios";

export const searchProductByName = (searchValue) => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `/product/search-name?keyword=${searchValue}`,
        headers: {
            'Content-Type': 'application/json'
        },

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

