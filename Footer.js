import Image from 'next/image'
import Link from 'next/link'
import utilStyles from './styles/utils.module.css'

export default function Footer() {
    return (
        <footer className={ utilStyles.flexboxColumn }>
          <p>© 2021 Vietnamese Words</p>
        </footer>
    )
}