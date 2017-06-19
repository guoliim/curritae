import React from 'react'

import Label from './Label'

const FrontEnd = () => {

    return (
        <div>
            <div className="skill-item">
                <Label title={'HTML/CSS'} url={'./img/ic_code_24px.svg'}/>
                <ul className="skill-detail">
                    <li>
                        掌握语义化的 HTML，模块化的 CSS，实现较复杂的布局
                    </li>
                    <li>
                        熟悉已标准化的 HTML5 / CSS3 新特性，实验项目中能尝试使用未广泛实现的新标准
                    </li>
                </ul>
            </div>
            <div className="skill-item">
                <Label title={'Javascript'} url={'./img/ic_code_24px.svg'}/>
                <ul className="skill-detail">
                    <li>熟悉ES2015</li>
                    <li>熟悉JavaScript及框架搭建响应式Web App</li>
                    <li>熟悉JavaScript框架AngularJS</li>
                    <li>熟悉JavaScript框架React</li>
                    <li>熟悉 webpack 工具</li>
                    <li>了解JavaScript类库JQuery</li>
                </ul>
            </div>
            <div className="skill-item">
                <Label title={'Others'} url={'./img/ic_code_24px.svg'}/>
                <ul className="skill-detail">
                    <li>熟悉前端MV*模型</li>
                    <li>了解基本的后台开发NodeJS</li>
                    <li>了解基本web相关技术: Socket.io、Express</li>
                    <li>使用项目管理和协同工具: Git</li>
                    <li>了解Oracle的使用</li>
                    <li>了解LISP语言</li>
                </ul>
            </div>
        </div>
    )
}

export default FrontEnd
