import React from 'react'
import likeButton from './likeButton.css'


class LikeButton extends React.Component {
    state = {
        likes: 0
      };

      addLike = () => {
        let newCount = this.state.likes + 1;
          this.setState({
          likes: newCount
        });
      };

    render() {
        
          return <button className="button"  onClick={this.addLike}id={this.props.itemId}> LIKES: {this.state.likes} </button>
      }
    }

    
export default LikeButton