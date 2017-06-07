import React from 'react'
import PropTypes from 'prop-types'
import Education from './Education'
import Language from './Language'
import Skill from './Skill'

const Left = ({detail = {}}) => {
    const style2 = {
        paddingRight: 8 + 'px',
        width: 45 + '%'
    }

    return (
        <div className="mdl-cell mdl-cell--6-col" style={style2}>
            <div id="left" className="mdl-card card-left">
                <Education edus={detail.edu}/>
                <Language lang={detail.cet6}/>
                <Skill skills={detail.skill}/>
                <div id="left-margin"/>
            </div>
        </div>
    )
}

Left.propTypes = {
    detail: PropTypes.object,
}

export default Left