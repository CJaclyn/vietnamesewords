import Link from 'next/link';
import WordCard from './WordCard';
import { getColor } from './color';

export default function AllWords(props) {
  const wordsData = props.words;

  return (
    <div className='word-cards-container'>
      {wordsData.length === 0 ? (
        <p>No results...</p>
      ) : (
        wordsData.map(({ word, id }) => (
          <WordCard word={word} id={id} color={getColor()} key={id} />
        ))
      )}
    </div>
  );
}
