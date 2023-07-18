import { httpRequest } from "../utils/axios";

export const searchProduct = (searchValue) => {
    let data = JSON.stringify({

        "keyword": searchValue
    });

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '/product/search',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
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

