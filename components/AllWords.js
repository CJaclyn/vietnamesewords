import Link from 'next/link'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import { words } from '../wordsData'
import React, { useEffect, useState } from 'react';

export default function AllWords (props) {
  let wordsData = props.words

  return (
    <>
    <div className={ utilStyles.flexboxColumn }>
      <div className={ styles.grid }>
      {wordsData.reverse().map((word, index) => (
        <>
        <Link key={ index } href={`/word/${ word.id }`}>
          <a className={`${ utilStyles.card } ${ styles.smallCard } ${ utilStyles.borderRadius }`}>
            <h2>{ word.word }</h2>
            <p className={ utilStyles.overflow }>{ word.word } is { word.meaning.substring(0, 30) }</p>
            <p className={`${ utilStyles.overflow } ${styles.eng}`}>
              Eng: { word.english.substring(0, 25) }
            </p>
          </a>
        </Link>
        </>
      ))}
      </div>
    </div>
    </>
  )
}