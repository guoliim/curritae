import React from 'react'
import PropTypes from 'prop-types'

const Undergraduate = ({time = '', school = '', spec = ''}) => {
    return (
        <div id="undergraduate" className="spacing">
            <p className="edu-item"><span className="edu-item_left">时间</span><span className="edu-item_right">{time}</span></p>
            <p className="edu-item"><span className="edu-item_left">学校</span><span className="edu-item_right">{school}</span></p>
            <p className="edu-item"><span className="edu-item_left">专业</span><span className="edu-item_right">{spec}</span></p>
        </div>
    )
}

Undergraduate.propTypes = {
    time: PropTypes.string,
    school: PropTypes.string,
    spec: PropTypes.string,
}

export default Undergraduate
