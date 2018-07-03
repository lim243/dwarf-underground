import React, {Component} from 'react'
import CommentForm from './CommentForm';

class ArticleLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
          };
        }

        toggleHidden () {
            this.setState({
              isHidden: !this.state.isHidden
            })
          }

    render () {
        return (
            <div className="article-links">
                <a className="article-link" onClick={this.toggleHidden.bind(this)}>
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                {!this.state.isHidden && <CommentForm />}
                <a className="article-link">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
            </div>
        )
    }
}

export default ArticleLinks