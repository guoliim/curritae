import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'ramda'

import Head from './Head'
import MainContainer from './MainContainer'

const ContainerforRedux = ({detail = {}, getConfigByFetch}) => {

    getConfigByFetch(detail)

    if (isEmpty(detail)) {
        return (
            <div className="mdl-card mdl-shadow--2dp resume">
                <div>Loading</div>
            </div>
        )
    } else {
        return (
            <div className="mdl-card mdl-shadow--2dp resume">
                <Head name={detail.detail.name}/>
                <MainContainer detail={detail.detail}/>
            </div>
        )
    }
}

ContainerforRedux.propTypes = {
    detail: PropTypes.object
}

export default ContainerforRedux