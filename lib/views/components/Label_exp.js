import React from 'react'
// import imageExp from '../../../img/ic_explore_24px.svg';

const Label_exp = () => {
    const style6 = { marginLeft: 2 + 'px' }

    return (
        <div className="exp-label">
            <img style={style6} src='./img/ic_explore_24px.svg' />
            <div className="title">
                <span className="title-letter">个人项目实践</span>
            </div>
        </div>
    )
}

export default Label_exp
