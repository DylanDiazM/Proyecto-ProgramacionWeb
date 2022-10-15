import "./Cart.css"

function Cart({ cart }) {

    return (
        <div>
            {
                cart.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img src='https://pbs.twimg.com/profile_images/1145524454170062848/U4lxVYEw_400x400.png' />
                            <span> {cartItem.name}</span>
                            <button>-</button>
                            <span>{cartItem.quantity}</span>
                            <button>+</button>
                            <span>{cartItem.price}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart
