import spinner from '../../assets/spinner.gif';

function Spinner() {
  return (
    <div className='max-w-5xl mx-auto'>
      <img src={spinner} alt='a spinner' className='block mx-auto' />;
    </div>
  );
}

export default Spinner;
