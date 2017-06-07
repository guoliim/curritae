import React from 'react'
import PropTypes from 'prop-types'

const Front_end = ({value = {item: [], detail: ''}}) => {
    return (
        <div>
            <div className="skill-label">
                <img className="skill-label_svg" src='./img/ic_code_24px.svg' />
                <div className="title">
                    <span className="skill-title_letter">{value.item}</span>
                </div>
            </div>
            <ul className="skill-detail">
                {value.detail.map((item) =>
                <li key={item}>{item}</li>
                )}
            </ul>
        </div>
    )
}

Front_end.propTypes = {
    item: PropTypes.string,
    detail: PropTypes.array,
}

export default Front_end