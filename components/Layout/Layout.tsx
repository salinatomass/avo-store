import Navbar from '@components/Navbar/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>This is the footer</footer>

      <style jsx>
        {`
          .container {
            background: pink;
          }

          footer {
            color: blue;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
