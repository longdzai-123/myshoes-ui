import { httpRequest } from "../utils/axios";

export const CommentByProductId = (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `comment/${id}`,
        headers: {}
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

export const CommentAdd = (content, idProduct, idUser) => {
    let data = JSON.stringify({
        "content": content,
        "product": {
            "id": idProduct
        },
        "user": {
            "id": idUser
        }
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'member/comment/add',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
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