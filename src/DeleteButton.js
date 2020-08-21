import React from 'react'

class DeleteButton extends React.Component {
    deleteItem(id){
        fetch(`http://localhost:3000/items{id}`, {
            method:"DELETE"
    }).then(() => {}
    
    )
        })

    }
    render() {
        
        return <button>delete</button>
    }
}
export default DeleteButton