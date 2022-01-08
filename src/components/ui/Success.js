import React from 'react'
// import '../styles/Error.scss'
const Success = ({ text }) => {
    return (
        <p className="txt-success error">
            {text || 'Default'}
        </p>
    )
}

export default Success