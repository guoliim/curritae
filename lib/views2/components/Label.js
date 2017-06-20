import React from 'react'

const Label = ({ title= '', url = '', alt = ''}) => {

    return (
        <div className="label">
            <img className="label-img" src={url} alt={alt}/>
            <div className="label-title">{title}</div>
        </div>
    )
}

export default Label
