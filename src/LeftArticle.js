import React from 'react'


import Avatar from './Avatar';
import ArticleLinks from './ArticleLinks';
import LeftArticleParagraph from './LeftArticleParagraph';

const LeftArticle = () => {
    return (
    <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        
            <Avatar />

        <LeftArticleParagraph />

        <ArticleLinks />

    </div>
    )
}

export default LeftArticle