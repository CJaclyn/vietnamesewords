import { useRouter } from 'next/router'

export default function ActiveLink ({ children, href }) {
    const router = useRouter()
    const style = {
        background: router.asPath === href ? '#ffe96f' : ''
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={ href } onClick={ handleClick } style={ style }>
            { children }
        </a>
    )
}