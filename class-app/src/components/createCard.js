import React from 'react';

class CreateCard extends React.Component {
    constructor(props){
        super();
        this.state = {
            title: props.editedCard?.title || '',
            description: props.editedCard?.description || '',
            id: props.editedCard?.id || '',
            editFlag: props.editedCard ? !!Object.keys(props.editedCard).length : false
        }
    }

    onInputChangeHandler = (e) => {
        if (e.target.name === 'title') {
            this.setState({title: e.target.value})
        }

        if (e.target.name === 'description') {
            this.setState({description: e.target.value})
        }

        if (!this.state.editFlag) this.setState(() => ({id: this.props.lastID + 1}))
    }

    onAccept = () => {
        const {title, description, id, editFlag} = this.state

        if (title !== '' && description !== '') {
            if (editFlag) {
                this.props.createCard(this.state, true)
            } else {
                this.props.createCard(this.state)
                this.props.changeLastID(id)
            }
        } else {
            // show error message
        }

        this.props.switchModal(false)
    }

    render() {
        const {title, description, editFlag} = this.state;

        return (
            <>
                <div className="row">
                    <label htmlFor="card-title">Card title</label>
                    <input
                        className="input-text"
                        id="card-title"
                        type="text"
                        placeholder="Enter card Title"
                        value={title}
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
                        value={description}
                        name='description'
                        onChange={this.onInputChangeHandler}
                    />
                </div>

                <div className="btn-holder">
                    <button className="add" onClick={this.onAccept}>{editFlag ? 'save' : 'add'}</button>
                    <button className="cancel" onClick={() => this.props.switchModal(false)}>cancel</button>
                </div>
            </>
        );
    }
}

export default CreateCard;
