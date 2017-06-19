import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'

const Work = ({ item ='', time = '', detail = [] }) => {

    return (
        <div className="works-item">
            <Label title={item} url={'./img/ic_label_24px.svg'}/>
            <div className="works-time">{time}</div>
            <ul className="works-detail">
                {detail.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

Work.propTypes = {

    item: PropTypes.string,
    time: PropTypes.string,
    detail: PropTypes.array,
}

export default Work
