import React from 'react'

class DeleteButton extends React.Component {

    render() {
        
        return <button className="button" onClick={() => this.props.handleDelete(this.props.itemId)}>delete</button>
    }
}
export default DeleteButton