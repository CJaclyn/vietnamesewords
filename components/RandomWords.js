import Link from 'next/link'
import { words } from '../wordsData'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

function shuffleArray (array) {
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
    const shuffledWords = shuffleArray(words)

    return (
        <div className={ utilStyles.flexboxRowResponsive }>
        {shuffledWords.slice(0,3).map((word, index) => (
            <Link key={ index } href={`/word/${ word.id }`}>
                <a className={`${ utilStyles.card } ${ styles.smallCard } ${ utilStyles.borderRadius }`}>
                    <h2>{ word.word }</h2>
                    <p>{ word.word } is { word.meaning }</p>
                    <p className={`${ utilStyles.overflow } ${styles.eng}`}>
                        Eng: { word.english }
                    </p>
                </a>
            </Link>
        ))}
        </div>
    )
}