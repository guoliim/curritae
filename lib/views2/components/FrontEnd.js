import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'

const FrontEnd = ({ item = '', detail = [] }) => {

    return (
        <div>
            <div className="skill-item">
                <Label title={item} url={'./img/ic_code_24px.svg'} alt={item}/>
                <ul className="skill-detail">
                    {detail.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

FrontEnd.propTypes = {

    item: PropTypes.string,
    detail: PropTypes.array,
}

export default FrontEnd
