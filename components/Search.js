export default function Search(props) {

  return (
    <div className='search-bar-container'>
      <input
        type='text'
        aria-label='search bar'
        placeholder='search word'
        value={props.value}
        onChange={props.handleChange}
        className='search-bar'
      />
    </div>
  );
}
