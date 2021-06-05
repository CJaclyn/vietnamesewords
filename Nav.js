import Link from 'next/link'
import ActiveLink from './components/ActiveLink'

export default function Nav () {
    return (
        <nav>
            <Link href="/">
                <a><img src="/vietnamese_words_logo.png" alt="vietnamese words logo" width="100" /></a>
            </Link>
            <div className="nav-right">
                <ActiveLink href="/">
                    Home
                </ActiveLink>
                <ActiveLink href="/about">
                    About
                </ActiveLink>
                <ActiveLink href="/submit-word">
                    Submit Word
                </ActiveLink>
            </div>
        </nav>
    )
}