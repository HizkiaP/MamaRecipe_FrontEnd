import PropTypes from 'prop-types'

const Input = ({type = "text", placeholder, ...props}) => {
  return (
    <div>
      <label htmlFor="formGroupExampleInput2" className="form-label">{props.label}</label>
      <input {...props} type={type} placeholder={placeholder} className="form-control opacity-50" id="formGroupExampleInput2"  />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
}

export default Input