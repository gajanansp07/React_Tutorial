import React from 'react'

const GreetD = ({name,language}) =>{
    // const { name, language } = props //props object as a paramiter to GreetD arrow function
    return (
        <div>
            <h1>
                Hello { name } a. k. a. {language} .
            </h1>
        </div>
    )
}
export default GreetD