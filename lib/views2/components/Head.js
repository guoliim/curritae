import React from 'react'

const Head = ({ name = '' }) => {

    return (
        <div className="head">
            <div className="head-container">
                <div className="head-title">
                    <div className="head-name">{name}</div>
                    <div className="head-position">前端工程师</div>
                </div>
                <div className="head-contact">
                    <div>tel: 15651027309</div>
                    <div>email: im@guoli.im</div>
                    <div>github: https://github.com/guoliim</div>
                </div>
            </div>
        </div>
    )
}

export default Head
