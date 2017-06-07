import React from 'react'
import PropTypes from 'prop-types'
import Left from './Left'
import Right from './Right'

const MainContainer = ({detail = {}}) => {
    const style1 = { margin: 0 }

    return (
        <div className="mdl-grid mdl-grid--no-spacing" style={style1}>
            <Left detail={detail}/>
            <Right detail={detail}/>
        </div>
    )
}

MainContainer.propTypes = {
    detail: PropTypes.object,
}

export default MainContainer