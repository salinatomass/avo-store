import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Avo Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="container" style={{ paddingBlock: '44px' }}>
        {children}
      </div>
      <Toaster />
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
