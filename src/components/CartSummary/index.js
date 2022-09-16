// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let sum = 0
      cartList.forEach(each => {
        sum += each.quantity * each.price
      })
      return (
        <div className="cart-summary">
          <h1 className="cart-sum">
            <span className="cart-sum-value">Order Total: </span>
            Rs {sum}/-
          </h1>
          <p className="cart-summary-description">
            {cartList.length} items in cart
          </p>
          <button className="check-out-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
