import React from 'react'
import PropTypes from 'prop-types'

const Edu = ({ time = '', school = '', special = '' }) => {

    return (
        <div>
            <div className="edu-item"><span className="edu-item_left">时间</span><span className="edu-item_right">{time}</span></div>
            <div className="edu-item"><span className="edu-item_left">学校</span><span className="edu-item_right">{school}</span></div>
            <div className="edu-item"><span className="edu-item_left">专业</span><span className="edu-item_right">{special}</span></div>
        </div>
    )
}

Edu.propTypes = {

    time: PropTypes.string,
    school: PropTypes.string,
    special: PropTypes.string,
}

export default Edu

