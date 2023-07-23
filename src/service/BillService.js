import { httpRequest } from "../utils/axios";

export const BillAdd = (billItems, name, phone, address, totalPrice) => {
    let data = JSON.stringify({
        "name": name,
        "phone": phone,
        "address": address,
        "totalPrice": totalPrice,
        "billItems": billItems
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'member/bill/add',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        data: data
    };

    return httpRequest.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

}

export const BillByUserId = (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `member/bill/${id}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },

    };

    return httpRequest.request(config)
        .then((response) => {
            // console.log(JSON.stringify(response.data));
            return response.data
        })
        .catch((error) => {
            console.log(error);
        });

}

