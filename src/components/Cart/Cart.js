import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>
        {
            [{id: 'c1', name: 'Sushi', amount: 2, price: 11.99 }].map((list)=> <li>{list.name}</li>)
        }
    </ul>;
    return (
        <Modal onHideCartHandler={props.onHideCartHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span> 25.99</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHideCartHandler} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;