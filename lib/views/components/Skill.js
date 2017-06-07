import React from 'react'
import PropTypes from 'prop-types'
import Label from './Label'
import Front_end from './Front_end'

const Skill = ({skills = []}) => {
    const imgsrc = './img/ic_build_24px.svg'

    return (
        <div id="skill" className="item-left skill-left">
            <Label src={imgsrc}/>
            {skills.map((skill) =>
            <Front_end key={skill.item} value={skill}/>
            )}
        </div>
    )
}

Skill.propTypes = {
    skills: PropTypes.array
}

export default Skill
