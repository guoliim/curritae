import React from 'react'

const Label = ({src = ''}) => {
    return (
        <div className="label">
            <img className="label-svg" src={src}/>
            <div className="title">
                <span className="title-letter">语言水平</span>
            </div>
        </div>
    )
}

export default Label
