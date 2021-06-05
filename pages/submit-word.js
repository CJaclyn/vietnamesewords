import Head from 'next/head'
import Nav from '../Nav'
import Footer from '../Footer'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/SubmitWord.module.css'
import emailjs from 'emailjs-com';

export default function Home () {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_zp9wqoc', 'template_qak1dfv', e.target, 'user_nzqRylVoDuzQUcndDZ933')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <>
        <Head>
            <title>Submit a Vietnamese Word or Expression</title>
            <meta name="description" content="Submit a Vietnamese abbreviation, slang, texting, or social media word." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main className={`${ utilStyles.paddingTop } ${ utilStyles.main } ${ utilStyles.flexboxColumn }`}>
            <h1 className={ utilStyles.centered }>Submit a Vietnamese Word or Expression</h1>
            <form className={ utilStyles.flexboxColumn } onSubmit={ sendEmail }>
                <label htmlFor="word">Word or Expression</label>
                <p className={ styles.inputDescription }>
                    The word or expression can be an abbreviation (e.g. ntn), a shortened 
                    word or expression (e.g. mk, j z tr), an altered word (e.g. bia đia), a slang 
                    (e.g. fishu), an onomatopoeia (e.g. hic), or any other social media and 
                    texting language.
                </p>
                <input 
                type="text" 
                id="word" 
                name="word"
                className={`${ utilStyles.borderRadius } ${ styles.formElements }`} 
                required />
                <label htmlFor="meaning">Meaning</label>
                <p className={ styles.inputDescription }>
                    What's the meaning of the word in Vietnamese and English? Leave this blank
                    if you don't know.
                </p>
                <textarea 
                name="meaning" 
                id="meaning" 
                cols="30" 
                rows="8" 
                className={`${ utilStyles.borderRadius } ${ styles.formElements }`} />
                <button className={`${ utilStyles.button } ${ utilStyles.borderRadius }`}>Submit</button>
            </form>
        </main>
        <Footer />
        </>
    )
}
