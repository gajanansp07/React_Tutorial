import React from 'react'
import '../AppStyle.css'
import style from '../AppStyle.module.css'
function StylModule() {
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 className={style.success}>Success</h1>
        </div>
    )
}

export default StylModule
