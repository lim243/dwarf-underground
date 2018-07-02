import React from 'react'


import Avatar from './Avatar';
import ArticleLinks from './ArticleLinks';
import Large8ArticleBody from './Large8ArticleBody';

const Large8 = () => {
    return (
    <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        
            <Avatar />

        <Large8ArticleBody />

        <ArticleLinks />

    </div>
    )
}

export default Large8