import React from 'react';

class CreateCard extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            id: ''
        }
    }

    onInputChangeHandler = (e) => {
        if (e.target.name === 'title') {
            this.setState({title: e.target.value})
        }

        if (e.target.name === 'description') {
            this.setState({description: e.target.value})
        }

        this.setState({id: this.props.lastID + 1})
    }

    addCard = () => {
        const {title, description} = this.state

        if (title !== '' && description !== '') {
            this.props.onConfirm(this.state)
            this.props.changeLastID()
        }

        this.props.switchModal(false)
    }

    render() {
        return (
            <>
                <div className="row">
                    <label htmlFor="card-title">Card title</label>
                    <input
                        className="input-text"
                        id="card-title"
                        type="text"
                        placeholder="Enter card Title"
                        name='title'
                        onChange={this.onInputChangeHandler}
                    />
                </div>

                <div className="row">
                    <label htmlFor="card-description">Card description</label>
                    <input
                        className="input-text"
                        id="card-description"
                        type="text"
                        placeholder="Enter card Description"
                        maxLength={200}
                        name='description'
                        onChange={this.onInputChangeHandler}
                    />
                </div>

                <div className="btn-holder">
                    <button className="add" onClick={this.addCard}>add</button>
                    <button className="cancel" onClick={() => this.props.switchModal(false)}>cancel</button>
                </div>
            </>
        );
    }
}

export default CreateCard;
