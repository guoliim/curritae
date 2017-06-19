import React from 'react'
import PropTypes from 'prop-types'

import Edus from './Edus'
import Lang from './Lang'
import Skills from './Skills'

const Left = ({ detail = {} }) => {

    return (
        <div className="left">
            <div className="left-school">
                <Edus edus={detail.edu}/>
                <Lang lang={detail.cet6}/>
            </div>
            <div className="left-skill">
                <Skills skills={detail.skill}/>
            </div>
        </div>
    )
}

Left.propTypes = {

    detail: PropTypes.object,
}

export default Left