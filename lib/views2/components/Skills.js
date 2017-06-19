import React from 'react'

import FrontEnd from './FrontEnd'
import Label from './Label'

const Skill = () => {

    return (
        <div className="skill">
            <Label title={'技能'}  url={'./img/ic_build_24px.svg'}/>
            <FrontEnd/>
        </div>
    )
}

export default Skill