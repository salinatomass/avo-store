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
          }
        `}
      </style>
    </>
  )
}

export default Layout
