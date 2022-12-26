import Link from 'next/link'
import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs'

const Footer = () => (
  <footer className="container">
    <div className="item">
      <h3>Nosotros</h3>
      <Link href="/about" passHref style={{ color: 'var(--tertiary-color)' }}>
        Conoce más
      </Link>
    </div>
    <div className="item">
      <h3>Servicios</h3>
      <Link href="/" passHref style={{ color: 'var(--tertiary-color)' }}>
        Todos los productos
      </Link>
    </div>
    <div className="item">
      <h3>Hecho por</h3>
      <a
        href="https://salinatomass.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        Tomas Salina | @salinatomass
      </a>
      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/salinatomass/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/salinatomass/"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon /> Github
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      footer {
        display: flex;
        justify-content: space-between;
      }
      footer a {
        color: var(--tertiary-color);
      }
      .item {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .social {
        display: flex;
        align-items: center;
        gap: 18px;
      }
      .social a {
        display: flex;
        align-items: center;
        gap: 6px;
      }
    `}</style>
  </footer>
)

export default Footer
