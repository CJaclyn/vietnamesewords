import Head from 'next/head';
import { words } from '../../wordsData';
import RandomWords from '../../components/RandomWords';
import { getColor } from '../../components/color';
import Nav from '../../components/Nav';

export default function Word({ word }) {
  return (
    <>
      <Head>
        <title>What is {word.word} in Vietnamese?</title>
        <meta
          name='description'
          content={`What is ${word.word} in Vietnamese and English?`}
        />
      </Head>

      <Nav />
      <main>
        <article
          className='word-definition-container'
          style={{ background: getColor() }}
        >
          <h1>
            What is
            <span className='bold'> {word.word} </span>
            in Vietnamese?
          </h1>
          <p>
            <span>{word.word}</span> is
            <span className='bold'> {word.meaning} </span> in Vietnamese
          </p>
          <p >It is <span className='bold'>{word.english}</span> in English.</p>
          <div dangerouslySetInnerHTML={{ __html: word.contentHtml }} />
        </article>
        <aside className='other-words-container'>
          <h2>Other Words</h2>
          <RandomWords color={getColor} />
        </aside>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = words.map((word) => ({
    params: { id: word.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const wordsData = words.filter((p) => p.id == params.id);

  return {
    props: {
      word: wordsData[0],
    },
  };
}
