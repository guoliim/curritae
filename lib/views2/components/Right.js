import React from 'react'
import PropTypes from 'prop-types'

import Works from './Works'
import Exps from './Exps'

const Right = ({ detail = {} }) => {

    return (
        <div className="right">
            <Works works={detail.work}/>
            <Exps exps={detail.experiences}/>
        </div>
    )
}

Right.propTypes = {

    detail: PropTypes.object,
}

export default Right