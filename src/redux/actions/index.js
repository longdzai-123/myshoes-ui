export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}
export const delAll = () => {
    return {
        type: "DELALL",
    }
}