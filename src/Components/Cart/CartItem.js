import dataDishes from "../../data/dataDishes";

const CartItem = ({cartItem}) => {
    console.log (cartItem)

    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    console.log(dishes)

    return(<div>
        <p>{dishes.name}</p>
        <p>{cartItem.quantity} portion(s)</p>
        <p>Price: ${dishes.price *cartItem.quantity}</p>

        </div>
    )
}

export default CartItem;