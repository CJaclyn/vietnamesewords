import Head from 'next/head'
import Nav from '../../Nav'
import Footer from '../../Footer'
import { words } from '../../wordsData'
import styles from '../../styles/Word.module.css'
import utilStyles from '../../styles/utils.module.css'
import RandomWords from '../../components/RandomWords'

export default function Word ({ word }) {
    return (
      <>
      <Head>
        <title>What is { word.word } in Vietnamese?</title>
        <meta name="description" content={`What is ${ word.word } in Vietnamese and English?`} />
      </Head>
      <Nav />
      <main className={`${utilStyles.autoHeight} ${ utilStyles.flexboxColumn } ${ utilStyles.main }`}>
        <article className={`${ utilStyles.card } ${ utilStyles.borderRadius } ${ styles.largeCard }`}>
          <h1 className={ utilStyles.h1M }> 
            What is 
            <span className={ utilStyles.color }> { word.word } </span>
            in Vietnamese?
          </h1>
          <p className={ utilStyles.pL }>
            <span className={ utilStyles.bold }>{ word.word }</span> is 
            <span className={ utilStyles.bold }> { word.meaning }</span> in Vietnamese
          </p>
          <p className={`${ utilStyles.pL } ${ styles.eng }`}>
            Meaning in English: <br></br>{ word.english }
          </p>
          <div dangerouslySetInnerHTML={{ __html: word.contentHtml }} />
        </article>
        <aside className={`${ utilStyles.flexboxColumn } ${ styles.randomWords }`}>
          <h2>Other Words</h2>
          <RandomWords />
        </aside>
      </main>
      <Footer />
      </>
    )
  }  

export async function getStaticPaths() {
  const paths = words.map(word => ({
    params: { id: word.id },
  }))
  
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const wordsData = words.filter(p => p.id == params.id)

    return { 
      props: {
        word: wordsData[0], 
      },
    }
}