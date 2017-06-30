import React from 'react'
import PropTypes from 'prop-types'

import EduList from './EduList'
import Lang from './Lang'
import SkillList from './SkillList'

const Left = ({ detail = {} }) => {

    return (
        <div className="left">
            <div className="left-school">
                <EduList edus={detail.edu}/>
                <Lang lang={detail.cet6}/>
            </div>
            <div className="left-skill">
                <SkillList skills={detail.skill}/>
            </div>
        </div>
    )
}

Left.propTypes = {

    detail: PropTypes.object,
}

export default Left