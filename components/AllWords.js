import WordCard from './WordCard';
import { getColor } from './color';
import { useEffect, useState, useRef } from 'react';

export default function AllWords(props) {
  const [wordsToDisplay, setWordsToDisplay] = useState(9);
  const wordsData = props.words;
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setWordsToDisplay((prev) => prev + 5);
      }
    }, options);

    if (observerRef && observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [observerRef]);

  return (
    <div className='word-cards-container'>
      {wordsData.length === 0 ? (
        <p>No results...</p>
      ) : (
        wordsData
          .slice(0, wordsToDisplay)
          .map(({ word, id }) => (
            <WordCard word={word} id={id} color={getColor()} key={id} />
          ))
      )}
      <div ref={observerRef} />
    </div>
  );
}
