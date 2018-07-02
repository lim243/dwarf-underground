import React, {Component} from 'react'

const RenderComment = (props) => {
    return (
      <li>{props.comment}</li>
    )
  }

class CommentForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          comments: [],
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const comment = this.state.value
        const comments = [...this.state.comments]
        comments.push(comment)
        this.setState({
            comments: comments,
        })

    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" id="commentForm" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" id="commentForm" value="Add Comment" />
            </form>
            <ul>
                {this.state.comments.map(currentComment => <RenderComment comment={currentComment} />)}
            </ul>
        </div>
      );
    }
  }

  export default CommentForm