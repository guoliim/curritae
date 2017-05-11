import React from 'react';
import ReactDom from 'react-dom';
import '../style/material.css';
import '../style/resume.css';
import imageSchool from '../img/ic_school_24px.svg';
import imageWork from '../img/ic_work_24px.svg';
import imageLabel from '../img/ic_label_24px.svg';
import imageCode from '../img/ic_code_24px.svg';
import imageExp from '../img/ic_explore_24px.svg';
import imageSkill from '../img/ic_build_24px.svg';
import imageLang from '../img/ic_language_24px.svg';

class Resume extends React.Component {
    render() {
        return(
            <div>
                <Container></Container>
            </div>

        )
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {detail: {}};
    }

    componentDidMount() {
        fetch("./api/config.json").then(res => {
            if(res.ok) {
                res.json().then(data => {
                    let detail = data;
                    this.setState({detail: detail});
                });
            } else {
                console.log("ERROR : ", res.status);
            }
        }, e => {
            console.log("Fetch failed", e);
        });
    }

    render() {
        return(
            <div className="mdl-card mdl-shadow--2dp resume">
                {/*<div>{this.state.name}</div>*/}
                {/*由下到上层级嵌套？*/}
                <Head name={this.state.detail.name}></Head>
                <Abstract abstract={this.state.detail.abstract}></Abstract>
                <MainContainer detail={this.state.detail}></MainContainer>
                <Contact contact={this.state.detail.contact}></Contact>
            </div>
        )
    }
}

class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    componentWillReceiveProps(nextPros) {
        console.log(nextPros);
        this.setState({name: nextPros.name});
    }

    render() {
        return(
            <div>
                <div className="head">
                    <h1 className="name">{this.state.name}</h1>
                    <p className="position">前端工程师</p>
                </div>
            </div>
        )
    }
}

class Abstract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            abstract: 'abstract'
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({abstract: nextProps.abstract});
    }
    render() {
        return(
            <div className="abstract">
                <p className="abstract-detail">{this.state.abstract}</p>
            </div>
        )
    }
}

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({detail: nextProps.detail});
    }

    render() {
        const style1 = {
            margin: 0
        };
        return(
            <div className="mdl-grid mdl-grid--no-spacing" style={style1}>
                <Left detail={this.state.detail}></Left>
                <Right detail={this.state.detail}></Right>
            </div>
        )
    }
}

class Left extends React.Component{
    constructor(props) {
       super(props);
       this.state = {
           detail: {}
       }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({detail: nextProps.detail});
    }

    render() {
        const style2 = {
            paddingRight: 8 + 'px',
            width: 45 + '%'
        };
        return(
        <div className="mdl-cell mdl-cell--6-col" style={style2}>
            <div id="left" className="mdl-card card-left">
                <Education education={this.state.detail.edu}></Education>
                <Language lang={this.state.detail.cet6}></Language>
                <Skill skills={this.state.detail.skill}></Skill>
                {/*<Work work={this.state.detail.work}></Work>*/}
                <div id="left-margin"></div>
            </div>
        </div>
        )
    }
}

class Education extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edus: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({edus: nextProps.education});
    }

    render() {
        return(
            <div id="education" className="item-left">
                <Label_edu></Label_edu>
                {this.state.edus.map((edu) =>
                    <Undergraduate key={edu.time} time={edu.time} school={edu.school} spec={edu.special}></Undergraduate>
                )}
            </div>
        )
    }
}

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

class Undergraduate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time,
            school: this.props.school,
            spec: this.props.spec
        }
    }

    render() {
        return(
            <div id="undergraduate" className="spacing">
                <p className="edu-item"><span className="edu-item_left">时间</span><span className="edu-item_right">{this.state.time}</span></p>
                <p className="edu-item"><span className="edu-item_left">学校</span><span className="edu-item_right">{this.state.school}</span></p>
                <p className="edu-item"><span className="edu-item_left">专业</span><span className="edu-item_right">{this.state.spec}</span></p>
            </div>
        )
    }
}

class Language extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lang: this.props.lang
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({lang: nextProps.lang});
    }

    render() {
        return(
            <div className="item-left">
                <Label_lan></Label_lan>
                <Cet_6 lang={this.state.lang}></Cet_6>
            </div>
        )
    }
}

class Label_lan extends React.Component{
    render() {
        return(
            <div className="label">
                <img className="label-svg" src={imageLang}/>
                <div className="title">
                    <span className="title-letter">语言水平</span>
                </div>
            </div>
        )
    }
}

class Cet_6 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lang: this.props.lang
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({lang: nextProps.lang});
    }

    render() {
        return(
            <div id="cet-6">
                <p className="lang-cet">CET-6</p>
                <p className="lang-detail">{this.state.lang}</p>
            </div>
        )
    }
}

class Work extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            works: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({works: nextProps.work});
    }

    render() {
        const style4 = {
            marginBottom: 16 + 'px'
        };
        return(
            <div id="work" className="skill">
                <Label_work></Label_work>
                {this.state.works.map((work) =>
                    <Works key={work.item} value={work}></Works>
                )}
            </div>
        )
    }
}

class Label_work extends React.Component{
    render() {
        return(
            <div className="label">
                <img className="label-svg"  src={imageWork}/>
                <div className="title">
                    <span className="title-letter">个人履历</span>
                </div>
            </div>
        )
    }
}

class Works extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.value.item,
            time: this.props.value.time,
            detail: this.props.value.detail
        }
    }
    render() {
        return(
            <div className="spacing">
                <div className="work-label">
                    <img className="label-svg_small" src={imageLabel} />
                    <div className="work-title">
                        <span className="work-title_letter">{this.state.item}</span>
                    </div>
                </div>
                <p className="time">{this.state.time}</p>
                <ul className="work-detail">
                    {this.state.detail.map((item) =>
                            <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

class Right extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({detail: nextProps.detail});
    }

    render() {
        const style5 = {
            width: 55 + '%'
        };
        return(
            <div className="mdl-cell mdl-cell--6-col" style={style5}>
                <div id="right" className="mdl-card card-right">
                    {/*<Skill skills={this.state.detail.skill}></Skill>*/}
                    <Work work={this.state.detail.work}></Work>
                    <Experience exps={this.state.detail.experiences}></Experience>
                    <div id="right-margin"></div>
                </div>
            </div>
        )
    }
}

class Skill extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({skills: nextProps.skills});
    }

    render() {
        return(
            <div id="skill" className="item-left">
                <Label_skill></Label_skill>
                {this.state.skills.map((skill) =>
                    <Front_end key={skill.item} value={skill}></Front_end>
                )}
            </div>
        )
    }
}

class Label_skill extends React.Component{
    render() {
        return(
            <div className="label">
                <img className="label-svg" src={imageSkill} />
                <div className="title">
                    <span className="title-letter">技能</span>
                </div>
            </div>
        )
    }
}

class Front_end extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.value.item,
            detail: this.props.value.detail
        }
    }
    render() {
        return(
            <div>
                <div className="skill-label">
                    <img className="skill-label_svg" src={imageCode} />
                    <div className="title">
                        <span className="skill-title_letter">{this.state.item}</span>
                    </div>
                </div>
                <ul className="skill-detail">
                    {this.state.detail.map((item) =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

class Experience extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            exps: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({exps: nextProps.exps});
    }

    render() {
        return(
            <div id="experience" className="exp">
                <Label_exp></Label_exp>
                {this.state.exps.map((exp) =>
                    <Exp key={exp.item} value={exp}></Exp>
                )}
            </div>
        )
    }
}

class Label_exp extends React.Component{
    render() {
        const style6 = {
            marginLeft: 2 + 'px'
        };
        return(
            <div className="exp-label">
                <img style={style6} src={imageExp} />
                <div className="title">
                    <span className="title-letter">个人项目实践</span>
                </div>
            </div>
        )
    }
}

class Exp extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            item: this.props.value.item,
            link: this.props.value.link,
            detail: this.props.value.detail
        }
    }
    render() {
        return(
            <div>
                <p className="exp-title"><a className="exp-a" href={this.state.link} >{this.state.item}</a></p>
                <p className="exp-detail">{this.state.detail}</p>
            </div>
        )
    }
}

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tel: '',
            email: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({tel: nextProps.contact.tel, email: nextProps.contact.email});
    }

    render() {
        return(
            <div id="contact" className="contact">
                <p className="contact-title">联系我</p>
                <div className="contact-detail">
                    <span className="tel">Tel :
                        <span className="tel-cell">{this.state.tel}</span>
                    </span>
                    <span className="email">Email :
                        <span className="email-address"><a href={"mailto:" + this.state.email} className="mailto">{this.state.email}</a></span>
                    </span>
                </div>
            </div>
        )
    }
}

ReactDom.render(
    <Resume/>,
    document.getElementById('root')
);