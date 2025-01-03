import React, {useState} from "react"
import Login from "./Login"

export default function Shop(props){
    let shopItems = props.items
    const [cart, setCart] = useState([])

    function addItem(item){
        setCart(c => [...c,item])
    }

    const renderItems = () => {
        return(
            shopItems.map(
                (item) => {
                    return(
                        <>
                        <li key = {item.id}>{item.name}
                        </li>
                        <p>Price per piece: ${item.price}</p>
                        <button onClick = {() => addItem(item)}> Add to Cart</button><br />
                        <br />
                        </>
                    )
                }
            )
        )
    }

    const renderCart =() => {
        return(
            cart.map((product) =>{
                return(
                    <>
                    <li key = {product.id}>{product.name}
                    </li>
                    <p>Price: ${product.price}</p>
                    </>
                )
            })
        )
    }
    if (props.isLogeedIn === false){
        return <Login />
    }else{
        return(
            <>
            <h1>This is the shop</h1>
            <ul>
                {renderItems()}
                <h4>These are the cart items: </h4>
                <ul>
                    {renderCart()}
                </ul>
            </ul>
            </>
        )
    }
}