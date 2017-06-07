import React from 'react'
import PropTypes from 'prop-types'
import Work from './Work'
import Experience from './Experience'

const Right = ({detail = {}}) => {
    const style5 = { width: 55 + '%'}

    return (
        <div className="mdl-cell mdl-cell--6-col" style={style5}>
            <div id="right" className="mdl-card card-right">
                <Work works={detail.work}/>
                <Experience exps={detail.experiences}/>
                <div id="right-margin"/>
            </div>
        </div>
    )
}

Right.propTypes = {
    detail: PropTypes.object,
}

export default Right
