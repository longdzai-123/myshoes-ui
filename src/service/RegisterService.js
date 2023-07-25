import { httpRequest } from "../utils/axios";

export const RegisterApi = (name, username, password, email) => {
    let data = new FormData();
    data.append('name', name);
    data.append('username', username);
    data.append('password', password);
    data.append('email', email);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'user/register',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: data
    };

    return httpRequest.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}