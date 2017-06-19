import React from 'react'

const Label = ({title= '', url = ''}) => {

    return (
        <div className="label">
            <img className="label-img" src={url}/>
            <div className="label-title">{title}</div>
        </div>
    )
}

export default Label
