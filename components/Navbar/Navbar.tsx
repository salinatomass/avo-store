import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppContext } from 'context/AppContext'

import Avocado from '@components/SVGIcons/Avocado'
import Basket from '@components/SVGIcons/Basket'

const Navbar = () => {
  const { pathname } = useRouter()
  const { getCartItemsCount } = useAppContext()

  return (
    <nav>
      <ul className="container">
        <li>
          <Link href="/" className="link">
            <div className={`link-container ${pathname === '/' && 'active'}`}>
              <Avocado />
              Avo Store
            </div>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <div className="link-container">
              <Basket />
              Cart ({getCartItemsCount()})
            </div>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .container {
          padding: 0;
        }
        nav {
          box-shadow: 8px 10px 34px rgba(255, 255, 255, 0.1);
        }
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .link-container {
          display: flex;
          align-items: center;
          gap: 5px;
          padding-block: 20px;
          padding-inline: 18px;
          font-size: 18px;
        }
        .link-container:hover {
          background-color: var(--tertiary-color);
        }
        .link-container.active {
          background-color: var(--tertiary-color);
        }
      `}</style>
    </nav>
  )
}

export default Navbar
