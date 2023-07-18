import { httpRequest } from "../utils/axios";

export const LoginAPI = (username, password) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    let config = {
        method: 'post',
        url: '/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: urlencoded
    };

    return httpRequest.request(config)
        .then((response) => {
            return (response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const MeAPI = () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '/member/me',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
    };

    return httpRequest.request(config)
        .then((response) => {
            return response.data
        })

}