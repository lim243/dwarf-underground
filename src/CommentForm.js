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
          visibility: false,
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
        if(comment !== ''){
            const comments = [...this.state.comments]
            comments.push(comment)
            this.setState({
                comments: comments,
                value: '',
            })
        }
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" 
                    onClick={this.setState({visibility: true})} 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                    placeholder='Add a comment'
                />
            </label>
            <input type="submit" value="Add Comment" />
            </form>
            <ul>
                {this.state.comments.map(currentComment => <RenderComment comment={currentComment} />)}
            </ul>
        </div>
      );
    }
  }

  export default CommentForm