import { createContext, useState } from "react";
import PropTypes from 'prop-types'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [ auth, setAuth ] = useState(null)

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.any
}

export {AuthProvider}

export default AuthContext