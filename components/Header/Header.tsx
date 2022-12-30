import { useState } from 'react'
import { randomNum } from '@utils/random'
import Modal from '@components/Modal/Modal'
import Avocado from '@components/SVGIcons/Avocado'

const Header = () => {
  const [modal, setModal] = useState({
    isActive: false,
    data: 'yes',
    loading: false,
  })

  const closeModal = () => setModal(state => ({ ...state, isActive: false }))

  const openModal = () =>
    setModal({
      isActive: true,
      data: randomNum(0, 1) === 0 ? 'no' : 'yes',
      loading: false,
    })

  const loadModal = () => {
    setModal(state => ({ ...state, loading: true }))
    setTimeout(() => {
      setModal({
        isActive: true,
        data: randomNum(0, 1) === 0 ? 'no' : 'yes',
        loading: false,
      })
    }, 500)
  }

  return (
    <header>
      <h1>
        Avo <Avocado size="64px" /> Store
      </h1>

      <button type="button" className="btn btn-link" onClick={openModal}>
        Should I eat an avo today?
      </button>

      <Modal isActive={modal.isActive} onClose={closeModal}>
        <p className={`response ${modal.loading ? 'loading' : ''}`}>
          {modal.data}
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={loadModal}
          disabled={modal.loading}
        >
          {modal.loading ? 'Loading...' : 'Try again'}
        </button>
      </Modal>

      <style jsx>{`
        header {
          text-align: center;
        }
        h1 {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          font-size: 52px;
        }
        .response {
          font-size: 98px;
          text-transform: uppercase;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        .response.loading {
          color: #767676;
        }
        .btn.btn-primary {
          width: 200px;
        }
        .btn.btn-link {
          font-size: 20px;
        }
      `}</style>
    </header>
  )
}

export default Header
