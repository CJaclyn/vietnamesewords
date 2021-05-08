import styles from './styles/Home.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
        <Link href="/">
        <a>Logo</a>
        </Link>
        <div className="nav-right">
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href={``}>
            <a>About</a>
        </Link>
        <Link href={``}>
            <a>Submit</a>
        </Link>
        </div>
        </nav>
    )
}