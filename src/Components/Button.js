import PropTypes from 'prop-types'


// You can destructure the 'props' object and include the specifc props you want to pass in
// This allows you to pass in each prop separately, rather than needing to use dot notation 
// Instead of this -> (props.prop) you can do this -> (prop)
const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>

    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
