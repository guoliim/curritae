import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'

const Exp = ({ item = '', link = '', detail = ''}) => {

    return (
        <div className="exps-item">
            <a className="exps-a" href={link}>
                <div className="exps-title">
                    <Label title={item} url={'./img/ic_extension_black_24px.svg'}/>
                </div>
            </a>
            <div className="exps-detail">{detail}</div>
        </div>
    )
}

Exp.propTypes = {

    item: PropTypes.string,
    link: PropTypes.string,
    detail: PropTypes.string,
}

export default Exp
