import React from "react"

class Card extends React.Component {
    editCard = () => {
        console.log('Edit card', this.props.id)
        this.props.switchModal(true);

        const {title, description, id} = this.props;
        this.props.editCard({id, title, description})
    }

    render() {
        const {title, description, id} = this.props;

        return (
            <>
                <div className="card">
                    <h4>id: {id}</h4>
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                    <div className="btn-holder">
                        <button className="btn" onClick={this.editCard}>edit</button>
                        <button className="btn" onClick={this.props.deleteCard}>delete</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Card;