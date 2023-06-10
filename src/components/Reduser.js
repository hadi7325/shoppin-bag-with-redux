const Reduser = (cart = [], action) => {

    if (action.type === "ADD") {
        const newItem = cart.filter((item) => item.id === action.payload.id)
        if (newItem < 1) {
            return [...cart, action.payload]
        } else {
            alert("این محصول در سبد خرید موجو است .")
            return cart
        }

    }
    if (action.type === "REMOVE") {
        return cart.filter((item) => item.id !== action.payload.id)
    }
    if (action.type === "INCREASE") {
        const newItem = cart.map((item) => {
            if (item.id === action.payload.id) {
                return { ...item, quentity: item.quentity + 1 }
            }
            return item
        })

        return newItem;
    }
    if (action.type === "DECREASE") {
        const newItem = cart.map((item) => {
            if (item.id === action.payload.id) {
                return { ...item, quentity: item.quentity - 1 }
            }
            return item
        })

        return newItem;
    }
    return cart;
}

export default Reduser;