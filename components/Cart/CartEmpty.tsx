const CartEmpty = () => (
  <div>
    <h2>Your cart is empty</h2>
    <p>You will need to add some items to the cart before you can checkout.</p>

    <style jsx>{`
      div {
        padding: 20px;
        background-color: var(--light-color);
        color: var(--primary-color);
        border-radius: 4px;
        border: 1px solid var(--primary-color);
        box-shadow: 0 15px 34px 20px rgba(255, 255, 255, 0.1);
      }
      p {
        color: var(--primary-color);
        font-size: 18px;
        margin-top: 5px;
      }
    `}</style>
  </div>
)

export default CartEmpty
