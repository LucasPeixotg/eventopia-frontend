import PropTypes from 'prop-types'
import style from './Button.module.css'

function Button(props) {
    return (
        <button type={props.type} className={style.button}>{props.children}</button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.any
}
Button.defaultProps = {
    type: "",
    text: "",
    children: ""
}

export default Button
