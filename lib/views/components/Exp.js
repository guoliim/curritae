import React from 'react'
import PropTypes from 'prop-types'

const Exp = ({value = {item: '', link: '', detail: ''}}) => {
    return (
        <div>
            <p className="exp-title"><a className="exp-a" href={value.link} >{value.item}</a></p>
            <p className="exp-detail">{value.detail}</p>
        </div>
    )
}

Exp.propTypes = {
    item: PropTypes.string,
    link: PropTypes.string,
    detail: PropTypes.string,
}

export default Exp
