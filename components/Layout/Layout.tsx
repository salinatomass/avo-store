import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingBlock: '44px' }}>
        {children}
      </div>
      <Footer />

      <style jsx global>
        {`
          .container {
            max-width: 700px;
            margin: 0 auto;
            padding: 0 20px;
          }
          @media screen and (min-width: 720px) {
            .container {
              padding: 0;
            }
          }
        `}
      </style>
    </>
  )
}

export default Layout
