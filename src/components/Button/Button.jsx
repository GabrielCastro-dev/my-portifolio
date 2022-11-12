import './Button.scss';

function Button({ children }) {
  return (
    <button className='standard-button'>
        { children }
        <hr className='horizontal-line'/>
    </button>
  )
}

export default Button