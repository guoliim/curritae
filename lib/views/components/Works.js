import React from 'react'
import PropTypes from 'prop-types'
// import imageLabel from '../../../img/ic_label_24px.svg';

const Works = ({value = {item: '', time: '', detail: []}}) => {
    return (
        <div className="spacing">
            <div className="work-label">
                <img className="label-svg_small" src='./img/ic_label_24px.svg' />
                <div className="work-title">
                    <span className="work-title_letter">{value.item}</span>
                </div>
            </div>
            <p className="time">{value.time}</p>
            <ul className="work-detail">
                {value.detail.map((item) =>
                    <li key={item}>{item}</li>
                )}
            </ul>
        </div>
    )
}

Works.propTypes = {
    item: PropTypes.string,
    time: PropTypes.string,
    detail: PropTypes.array,
}

export default Works
