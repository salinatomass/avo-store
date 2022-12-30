import Link from 'next/link'
import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs'

const Footer = () => (
  <footer className="container">
    <div className="item">
      <h3>About us</h3>
      <Link href="/about" passHref className="btn btn-link">
        Know more
      </Link>
    </div>
    <div className="item">
      <h3>Services</h3>
      <Link href="/" passHref className="btn btn-link">
        All products
      </Link>
    </div>
    <div className="item">
      <h3>Made by</h3>
      <a
        href="https://salinatomass.netlify.app"
        target="_blank"
        rel="noreferrer"
        className="btn btn-link"
      >
        Tomas Salina | @salinatomass
      </a>
      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/salinatomass/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-link"
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
            className="btn btn-link"
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
        padding-top: 20px;
        padding-bottom: 60px;

        align-items: center;
        flex-direction: column;
        text-align: center;
      }
      .item {
        display: flex;
        flex-direction: column;
        margin-bottom: 36px;
        gap: 8px;
      }
      .social {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px;
      }
      .social a {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      @media screen and (min-width: 600px) {
        footer {
          flex-direction: row;
          align-items: flex-start;
          text-align: start;
        }
        .item {
          gap: 20px;
          margin-bottom: 0;
        }
        .social {
          justify-content: flex-start;
        }
      }
    `}</style>
  </footer>
)

export default Footer
