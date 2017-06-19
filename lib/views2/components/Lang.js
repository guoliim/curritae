import React from 'react'

import Label from './Label'

const Lang = () => {

    return (
        <div className="lang">
            <Label title={'语言水平'} url={'./img/ic_language_24px.svg'} />
            <div className="lang-detail">能流畅阅读英文专业书籍、文档及其他资料,能够日常使用英文邮件,经常使用Google以及StackOverflow</div>
        </div>
    )
}

export default Lang
