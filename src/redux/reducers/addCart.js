const cart = [];

const addCarts = (state = cart, action) => {

    const product = action.payload

    // check neu product them vao gio xem co trung ko 

    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                // tang so luong 
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                return [...state, { ...product, qty: 1 }]
            }
            break;
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id)
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id)
            } else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }
            break;
        default: return state
            break;
    }
}

export default addCarts;