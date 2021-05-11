import Image from 'next/image'
import Link from 'next/link'
import utilStyles from './styles/utils.module.css'

export default function Footer() {
    return (
        <footer className={ utilStyles.flexboxColumn }>
          <p>
            Designed and developed by Jaclyn C
          </p>
          <p>
            Site under construction.
          </p>
        </footer>
    )
}