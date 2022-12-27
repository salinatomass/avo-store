import Image from 'next/image'

import { avoFacts } from './facts'

const About = () => {
  return (
    <main className="about">
      <h1>5 Surprising Facts About Avocados</h1>
      <figure>
        <Image
          src="/images/avocados.jpg"
          alt="Avocados"
          width={450}
          height={340}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <figcaption>
          Originally from{' '}
          <a
            href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-link"
          >
            Taste of Home
          </a>
        </figcaption>
      </figure>

      <ol className="facts">
        {avoFacts.map(({ title, content }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ol>

      <style jsx>{`
        .about {
          text-align: center;
        }
        h1 {
          margin-bottom: 30px;
        }
        figcaption {
          font-size: 18px;
        }
        ol {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 1.2rem;
          text-align: left;

          counter-reset: orderedlist;
        }
        li {
          position: relative;
        }
        li h3 {
          font-size: 20px;
          margin-left: 45px;
          margin-bottom: 40px;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);

          position: absolute;
          top: -30px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }
      `}</style>
    </main>
  )
}

export default About
