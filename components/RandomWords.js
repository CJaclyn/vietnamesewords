import { words } from '../wordsData';
import WordCard from './WordCard';
import { getColor } from './color.js';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default function RandomWords() {
  const shuffledWords = shuffleArray(words);

  return (
    <div className='other-word-cards-container'>
      {shuffledWords.slice(0, 3).map(({ word, id }) => (
        <WordCard word={word} id={id} color={getColor()} key={id} />
      ))}
    </div>
  );
}
