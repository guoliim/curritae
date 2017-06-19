import React from 'react'

import Edu from './Edu'
import Lang from './Lang'
import Skill from './Skill'

const Left = () => {

    return (
        <div className="left">
            <div className="left-school">
                <Edu/>
                <Lang/>
            </div>
            <div className="left-skill">
                <Skill/>
            </div>
        </div>
    )
}

export default Left