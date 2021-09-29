import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    const syl = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${syl} font-xl`}> Style with React </h1>
        </div>
    )
}

export default StyleSheet
