import React from 'react'

import Head from './Head'
import Left from './Left'
import Right from './Right'

const Container = () => {

    return (
        <div className="container">
            <Head/>
            <Left/>
            <Right/>
        </div>
    )
}

export default Container