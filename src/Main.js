import React from 'react'

import LeftArticle from './LeftArticle'
import RightArticle from './RightArticle'
import CommentForm from './CommentForm'

import AdLinks from './AdLinks';

const Main = () => {
    return (
    <main className="expanded row">
        <LeftArticle />
    
        <RightArticle />

        <CommentForm />

        <AdLinks />


    </main>
    )
}

export default Main