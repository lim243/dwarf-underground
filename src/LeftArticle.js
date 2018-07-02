import React from 'react'


import Avatar from './Avatar';
import ArticleLinks from './ArticleLinks';
import LeftArticleParagraph from './LeftArticleParagraph';
import CommentForm from './CommentForm'

const LeftArticle = () => {
    return (
    <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        
        <Avatar />

        <LeftArticleParagraph />

        <ArticleLinks />

        <CommentForm />

    </div>
    )
}

export default LeftArticle