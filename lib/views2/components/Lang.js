import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'

const Lang = ({ lang = '' }) => {

    return (
        <div className="lang">
            <Label title={'语言水平'} url={'./img/ic_language_24px.svg'} alt={'语言水平'}/>
            <div className="lang-detail">{lang}</div>
        </div>
    )
}

Lang.propTypes = {

    lang: PropTypes.string,
}

export default Lang
