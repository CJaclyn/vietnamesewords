import Link from 'next/link';
import useSound from 'use-sound';

export default function WordCard(props) {
  const [play] = useSound('../sounds/clickSound.mp3');

  return (
    <Link href={`/word/${props.id}`}>
      <div
        className='word-card-container'
        style={{ background: props.color }}
        onClick={play}
      >
        <p>{props.word}</p>
      </div>
    </Link>
  );
}
