import React from 'react'
//import imageLang from '../../../img/ic_language_24px.svg';

class Label_lan extends React.Component{
    render() {
        return(
            <div className="label">
                <img className="label-svg" src='./img/ic_language_24px.svg'/>
                <div className="title">
                    <span className="title-letter">语言水平</span>
                </div>
            </div>
        )
    }
}

export default Label_lan