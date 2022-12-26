import { AiOutlineClose as CloseIcon } from 'react-icons/ai'

const Modal = ({ children, isActive, onClose }) => {
  return (
    <section className={`wrapper ${isActive ? 'active' : ''}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        {children}
        <button type="button" className="btn close" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      <style jsx>{`
        .wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;

          display: grid;
          place-items: center;

          opacity: 0;
          visibility: hidden;
          transition-property: visibility opacity;
          transition-delay: 0.6s;
          transition-duration: 0.4s;
          will-change: visibility opacity;
        }
        .wrapper.active {
          opacity: 1;
          visibility: visible;
          transition-property: opacity;
          transition-delay: 0s;
          transition-duration: 0.3s;
          will-change: visibility opacity;
        }

        .modal {
          position: relative;

          width: fit-content;
          min-width: 500px;
          background: var(--white-color);
          padding: 40px;
          color: var(--black-color);
          animation: animationOut 0.8s forwards;
        }
        .wrapper.active .modal {
          animation: animationIn 0.8s;
        }

        .overlay {
          position: fixed;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.8);
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 30px;
          color: var(--primary-color);
        }

        @keyframes animationIn {
          0% {
            transform: translateY(-3000px);
          }
          60% {
            transform: translateY(25px);
          }
          75% {
            transform: translateY(-50px);
          }
          90% {
            transform: translateY(5);
          }
        }
        @keyframes animationOut {
          0% {
            transform: translateY(5);
          }
          60% {
            transform: translateY(-50px);
          }
          75% {
            transform: translateY(25px);
          }
          100% {
            transform: translateY(-3000px);
          }
        }
      `}</style>
    </section>
  )
}

export default Modal
