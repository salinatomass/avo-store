import Image from 'next/image'

export const getStaticProps = () => {
  return {
    props: {
      avoFacts: [
        {
          title: 'Most avocados come from Mexico',
          content:
            'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.',
        },
        {
          title: 'The conquistadors were huge fans.',
          content:
            'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ',
        },
        {
          title: '“Avocado” wasn’t its original name.',
          content:
            'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”',
        },
        {
          title: 'It’s actually a fruit.',
          content:
            'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.',
        },
        {
          title: 'There’s a secret trick to ripening them up quick',
          content:
            'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.',
        },
      ],
    },
  }
}

const About = ({ avoFacts }) => {
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
          priority
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
          margin-top: 25px;
        }
        ol {
          margin-top: 60px;
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
