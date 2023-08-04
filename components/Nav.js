import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href='/'>
        <h1>Vietnamese Words</h1>
      </Link>
      <p>
        Vietnamese abbreviations, expressions, slangs, social media &amp;
        messaging language
      </p>
    </nav>
  );
}
