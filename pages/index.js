import Head from 'next/head';
import AllWords from '../components/AllWords';
import { words } from '../wordsData';
import Nav from '../components/Nav';
import Search from '../components/Search';
import { useState } from 'react';
import ScrollUp from '../components/ScrollUp';

export default function Home() {
  const [input, setInput] = useState('');
  let wordsData = words.reverse();

  let inputs = input
    .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '')
    .toString()
    .toLowerCase();

  if (inputs.length > 0) {
    wordsData = wordsData.filter((w) => {
      return w.word.toLowerCase().match(`^${inputs}`);
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Vietnamese Words</title>
        <meta
          name='description'
          content='The definitions of Vietnamese words, expressions, abbreviations, slangs, texting and messaging language'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav />
      <main>
        <Search value={inputs} handleChange={handleChange} />
        <AllWords words={wordsData} />
        <ScrollUp />
      </main>
    </div>
  );
}
