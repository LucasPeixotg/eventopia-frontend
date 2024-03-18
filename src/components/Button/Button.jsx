import PropTypes from 'prop-types'
import style from './Button.module.css'

function Button(props) {
    return (
        <button type={props.type} className={style.button + " " + props.className}>{props.children}</button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string
}
Button.defaultProps = {
    type: "",
    text: "",
    children: "",
    className: ""
}

export default Button
