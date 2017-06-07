import React from 'react'
import PropTypes from 'prop-types'
import Label from './Label'
import Cet_6 from './Cet_6'

const Language = ({lang = ''}) => {
    const imgsrc = './img/ic_language_24px.svg'

    return (
        <div className="item-left">
            <Label src={imgsrc}/>
            <Cet_6 lang={lang}/>
        </div>
    )
}

Language.propTypes = {
    lang: PropTypes.string,
}

export default Language