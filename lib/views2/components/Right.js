import React from 'react'
import PropTypes from 'prop-types'

import WorkList from './WorkList'
import ExpList from './ExpList'

const Right = ({ detail = {} }) => {

    return (
        <div className="right">
            <WorkList works={detail.work}/>
            <ExpList exps={detail.experiences}/>
        </div>
    )
}

Right.propTypes = {

    detail: PropTypes.object,
}

export default Right