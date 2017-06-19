import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import JSON5 from 'json5'

import Container from './components/Container'

import '../../style/styles.css'


const bootupData = document.getElementById('bootupData').textContent

const Resume = ({bootupData = ''}) => {

    return bootupData === '' ? (
        <BrowserRouter>
            <Container />
        </BrowserRouter>
    ) : (
        <BrowserRouter>
            <Container detail={JSON5.parse(bootupData)}/>
        </BrowserRouter>
    )
}

render(

    <Resume bootupData={bootupData} />,
    document.getElementById('root')
)
