import React from 'react'

const WithoutJXS = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1> Hello this is With JXS. </h1>
    //     </div>
    // )
    return React.createElement('div', { id: 'Hello', className: 'DummyClass' } ,React.createElement('h1',null,'Hello this is WithoutJXS'))
} 

export default WithoutJXS