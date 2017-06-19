import React from 'react'
import PropTypes from 'prop-types'

import FrontEnd from './FrontEnd'
import Label from './Label'

const Skills = ({ skills = [] }) => {

    return (
        <div className="skill">
            <Label title={'技能'}  url={'./img/ic_build_24px.svg'}/>
            {skills.map((skill) => (
                <FrontEnd
                    {...skill}
                    key={skill.item}
                />
            ))}
        </div>
    )
}

Skills.propTypes = {

    skills: PropTypes.array,
}

export default Skills