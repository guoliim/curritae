import React from 'react'
import imageSchool from '../../img/ic_school_24px.svg';

class Label_edu extends React.Component{
    render() {
        const style3 = {
            marginBottom: 6 + 'px'
        };
        return(
            <div className="label" style={style3}>
                <img className="label-svg" src={imageSchool}/>
                <div className="title">
                    <span className="title-letter">教育经历</span>
                </div>
            </div>
        )
    }
}

export default Label_edu
