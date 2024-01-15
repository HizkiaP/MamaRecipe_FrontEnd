import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({onClick, type, ...props}) => {
  return (
    <button {...props} type={type} onClick={onClick} className="btn"></button>
  )
}

Button.proptypes = {
  type: PropTypes.string,
  onclick: PropTypes.object
  
}

export default Button