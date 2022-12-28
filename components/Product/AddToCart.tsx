import { useState } from 'react'
import { useAppContext } from 'context/AppContext'

const AddToCart = ({ product }) => {
  const { addToCart } = useAppContext()
  const [quantity, setQuantity] = useState(1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (quantity >= 1 && quantity <= 100) addToCart({ ...product, quantity })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        min={1}
        max={100}
        step={1}
        value={quantity}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn btn-primary">
        Add to cart
      </button>

      <style jsx>{`
        form {
          display: flex;
          margin-top: 20px;
        }
        input {
          width: 180px;
          height: contain;
          outline: none;
          padding: 8px 16px;
        }
        button {
          border-radius: 0;
          padding: 14px 18px;
        }
      `}</style>
    </form>
  )
}

export default AddToCart
