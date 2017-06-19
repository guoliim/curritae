import React from 'react'

import Label from './Label'

const Exps = () => {

    return (

        <div className="exps">
            <Label title={'个人项目实践'} url={'./img/ic_explore_24px.svg'}/>
            <div className="exps-item">
                <div className="exps-title">
                    <Label title={'curritae'} url={'./img/ic_extension_black_24px.svg'}/>
                </div>
                <div className="exps-detail">简历生成器。前端使用 React，具有两种模式 1.开发模式 2.输出静态文件模式。服务端渲染使用 Koa，在开发模式中具有热加载功能。读取 json 文件，作为配置选项信息。</div>
            </div>
            <div className="exps-item">
                <div className="exps-title">
                    <Label title={'fantasie'} url={'./img/ic_extension_black_24px.svg'}/>
                </div>
                <div className="exps-detail">fantasie 项目的前端部分,实践了 CRUD SPA 的 MusicRadio Web App,使用了HTML5、CSS3、Material Design Lite Css框架、Angular.js等技术,利用双队列解决了从后台获取高清无损音频文件时,等待时间过长的问题。</div>
            </div>
            <div className="exps-item">
                <div className="exps-title">
                    <Label title={'guoliim-blog'} url={'./img/ic_extension_black_24px.svg'}/>
                </div>
                <div className="exps-detail">基于 Gatsby 搭建的静态博客生成器，此博客使用 React 框架，使用 Typography.js 进行博客内容排版，并且还在持续改进中。</div>
            </div>
            <div className="exps-item">
                <div className="exps-title">
                    <Label title={'typography-theme-trajan'} url={'./img/ic_extension_black_24px.svg'}/>
                </div>
                <div className="exps-detail">基于 typography-theme-wordpress-2016 主题而设置的 Typography.js 主题，npm下载量超过400次(于2017-05-11)</div>
            </div>
        </div>
    )
}

export default Exps
