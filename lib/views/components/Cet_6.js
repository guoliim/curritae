import React from 'react'
import PropTypes from 'prop-types'

const Cet_6 = ({lang = ''}) => {
    return (
        <div id="cet-6">
            <p className="lang-cet">CET-6</p>
            <p className="lang-detail">{lang}</p>
        </div>
    )
}

Cet_6.propTypes = {
    lang: PropTypes.string
}

export default Cet_6