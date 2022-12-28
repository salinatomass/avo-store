import { useRef } from 'react'
import { useAppContext } from 'context/AppContext'

const AddToCart = ({ product }) => {
  const { addToCart } = useAppContext()
  const form = useRef(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(form.current)
    const quantity = Number(formData.get('quantity'))

    if (quantity >= 1 && quantity <= 100) addToCart({ ...product, quantity })
  }

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        min={1}
        max={100}
        step={1}
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
