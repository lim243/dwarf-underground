import React from 'react'

import LeftArticle from './LeftArticle'
import RightArticle from './RightArticle'
import AdLinks from './AdLinks';

const Main = () => {
    return (
    <main className="expanded row">
        <LeftArticle />
    
        <RightArticle />

        <AdLinks />


    </main>
    )
}

export default Main