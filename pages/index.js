import Head from 'next/head'
import Nav from '../Nav'
import Footer from '../Footer'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import React, { useState } from 'react'
import AllWords from '../components/AllWords'
import { words } from '../wordsData'
import ScrollUp from '../components/ScrollUp'

export default function Home () {
  const [input, setInput] = useState('')
  let inputs = input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "").toString().toLowerCase()
  let wordsData = words

  const handleChange = (e) => {
      e.preventDefault()
      setInput(e.target.value)
  }

  if (inputs.length > 0) {
    wordsData = wordsData.filter(
      (w) => {
      return w.word.toLowerCase().match(inputs)
    })
  }

  return (
    <>
    <div className={ styles.container }>
      <Head>
        <title>Vietnamese Words</title>
        <meta name="description" content="The definitions of Vietnamese words, expressions, abbreviations, slangs, texting and messaging language" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={`${ styles.main } ${ utilStyles.main }`}>
        <ScrollUp />
        <header className={ styles.header } id="header">
        <h1 className={`${ styles.title } ${ utilStyles.h1L }`}>Vietnamese Words</h1>
        
        <p className={ styles.description }>
          Vietnamese abbreviations, expressions, slangs, social media &amp; messaging language 
        </p>

          <input 
            type="text" 
            className={`${ styles.input } ${ utilStyles.borderRadius }`} 
            aria-label="search bar"
            placeholder="search word"
            value={ inputs }
            onChange={ handleChange }
          />
        </header>
        <AllWords words={ wordsData } />
      </main>
      <Footer />
    </div>
    </>
  )
}
