import Head from 'next/head'
import Nav from '../Nav'
import Footer from '../Footer'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/SubmitWord.module.css'
import emailjs from 'emailjs-com';
import React, { useState } from 'react'

export default function SubmitWord () {
    const [value, setValue] = useState ({ word: '' })
    const [error, setError] = useState('')

    //emailjs
    const sendEmail = e => {
        emailjs.sendForm('service_zp9wqoc', 'template_qak1dfv', e.target, 'user_nzqRylVoDuzQUcndDZ933')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    //set input value
    const handleChange = e => {
        const { name, value } = e.target
        setValue({ [name]: value })
    }

    //validate and send email
    const validateSend = e => {
        if(value.word.trim() === '') {
            setError("Word or expression required.")
        }else {
            setError('')
            sendEmail(e)
            alert("Word or expression has been submitted!")
            window.location.reload();
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        validateSend(e)
    }
    
    return (
        <>
        <Head>
            <title>Submit a Vietnamese Word or Expression</title>
            <meta name="description" content="Submit a Vietnamese abbreviation, slang, 
            texting, or social media word." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main className={`${ utilStyles.main } ${ utilStyles.flexboxColumn }`}>
            <h1 className={ utilStyles.centered }>Submit a Vietnamese Word or Expression</h1>
            <form className={ utilStyles.flexboxColumn } onSubmit={ handleSubmit }>
                <label htmlFor="word">Word or Expression</label>
                <p className={ styles.inputDescription }>
                    The word or expression can be an abbreviation (e.g. ntn), a shortened 
                    word or expression (e.g. mk, j z tr), an altered word (e.g. bia đia), a 
                    slang (e.g. fishu), an onomatopoeia (e.g. hic), or any other social media 
                    and texting language.
                </p>
                <input 
                    type="text" 
                    id="word" 
                    name="word"
                    className={`${ utilStyles.borderRadius } ${ styles.formElements }`} 
                    value={ value.word }
                    onChange={ handleChange } 
                    required />
                { error && <p className={ styles.error }>{ error }</p> }

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
