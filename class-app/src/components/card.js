import React from "react"

class Card extends React.Component {
    editCard = () => {
        console.log('Edit card', this.props.id)
    }

    removeCard = () => {
        console.log('Remove card', this.props.id)
        this.props.deleteCard(this.props.id)
    }

    render() {
        const {title, description, id} = this.props;

        return (
            <>
                <div className="card">
                    <h4>id: {id}</h4>
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                    {/* <p>New / Inprogress / Blocked / Done</p> */}
                    <div className="btn-holder">
                        <button className="btn" onClick={this.editCard}>edit</button>
                        <button className="btn" onClick={this.removeCard}>delete</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Card;