import React from 'react'
// import imageWork from '../../../img/ic_work_24px.svg';

class Label_work extends React.Component{
    render() {
        return(
            <div className="label">
                <img className="label-svg"  src='../../../img/ic_work_24px.svg'/>
                <div className="title">
                    <span className="title-letter">个人履历</span>
                </div>
            </div>
        )
    }
}

export default Label_work
