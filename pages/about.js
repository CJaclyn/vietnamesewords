import Head from 'next/head'
import Nav from '../Nav'
import Footer from '../Footer'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/About.module.css'

export default function About () {
    return (
        <>
        <Head>
            <title>About</title>
            <meta name="description" content="About Vietnamese words, abbreviations, slangs, texting and messaging language" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main className={`${ utilStyles.flexboxColumn } ${ utilStyles.main }`}>
            <div className={`${ styles.aboutContainer }`}>
                <h1>About Vietnamese Words</h1>
                <p>
                    Do you have trouble understanding comments on Vietnamese social media? 
                    Are your Vietnamese friends sending you messages that are hard to 
                    decipher? Perhaps you are part of an older generation that hasn't 
                    been able to keep up with the “youth language”. Maybe you are in the 
                    process of learning Vietnamese and are not taught what non-textbook 
                    words such as 'ad' and 'mk' mean.
                </p>
                <p>
                    This website is for you! It will save you the time guessing and 
                    searching what all these words and abbreviations mean.
                </p>
                <h3>Disclaimer</h3>
                <p>
                    Abbreivations and shortened words are used almost exclusively
                    by younger people (children, teens, and some young adults). It's best if you 
                    don't use these as they are informal and can be considered lazy, immature, or 
                    incorrect Vietnamese. For the most part, slangs and onomatopoeias are fine 
                    to use for everyone. For example, using 'huhu' would be okay for everyone 
                    but you might get some looks if you're an older person using 'mlem mlem'.
                </p>
            </div>
        </main>
        <Footer />
        </>
    )
}

