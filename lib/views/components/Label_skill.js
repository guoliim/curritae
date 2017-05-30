import React from 'react'
//import imageSkill from '../../../img/ic_build_24px.svg';

class Label_skill extends React.Component{
    render() {
        return(
            <div className="label">
                <img className="label-svg" src='../../../img/ic_build_24px.svg' />
                <div className="title">
                    <span className="title-letter">技能</span>
                </div>
            </div>
        )
    }
}

export default Label_skill
