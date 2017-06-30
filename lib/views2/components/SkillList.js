import React from 'react'
import PropTypes from 'prop-types'

import FrontEnd from './FrontEnd'
import Label from './Label'

const SkillList = ({ skills = [] }) => {

    return (
        <div className="skill">
            <Label title={'技能'}  url={'./img/ic_build_24px.svg'} alt={'技能'}/>
            {skills.map((skill) => (
                <FrontEnd
                    {...skill}
                    key={skill.item}
                />
            ))}
        </div>
    )
}

SkillList.propTypes = {

    skills: PropTypes.array,
}

export default SkillList