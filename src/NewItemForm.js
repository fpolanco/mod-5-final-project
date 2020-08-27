import React from 'react'

export default class NewItemForm extends React.Component {

    state = {
        image: {},
        video: {}
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        })
    }

    onSubmit = (e) => { //transfer to app.js
        e.preventDefault()
        this.props.handleSubmit(this.state.image, this.state.video)
        console.log(this.state.video)
    }
    render(){
        return (
            <div className="form">
                <h1 className="h1" >Share Why You Think We All Need to Vote </h1>
                <form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type="file" name="image"  onChange={this.onChange}/>
                    <br/>
                    <label>Video Upload</label>
                    <input type="file" name="video" onChange={this.onChange}/>
                    <br/>
                    <input classname="form-btn" type="submit"/>
                </form>
            </div>
        )
    }
}