import React from "react";

import Card from "./components/card";
import Modal from "./components/modal";
import CreateCard from "./components/createCard";

import './all.css'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            createNew: false,
            showModal: false,
            lastID: 2,
            cardsLists: [{id: 1, title: '1', description: '111'}, {id: 2, title: '2', description: '222'}]
        }
    }

    switchModal = (showModal) => {
        this.setState({showModal})
    }

    changeLastID = () => {
        this.setState(() => ({
            lastID: this.state.lastID + 1
        }))
    }

    createCard = (obj) => {
        this.setState(() => ({
            cardsLists: [...this.state.cardsLists, obj]
        }))

        this.changeLastID()
    }

    deleteCard = (index) => {
        this.setState(() => ({
            cardsLists: this.state.cardsLists.filter(elem => (elem.id !== index))
        }))
    }

    render() {
        return (
            <>
                <main className="main">
                    <button className="create" onClick={() => this.switchModal(true)}>+</button>

                    <div className="card-holder">
                        {this.state.cardsLists.map((card, i) =>
                            <Card
                                title={card.title}
                                description={card.description}
                                deleteCard={this.deleteCard}
                                id={card.id}
                                key={i}
                            />
                        )}
                    </div>
                </main>

                <Modal
                    switchModal={this.switchModal}
                    showModal={this.state.showModal}
                >
                    <CreateCard
                        lastID={this.state.lastID || 0}
                        changeLastID={this.changeLastID}
                        switchModal={this.switchModal}
                        onConfirm={this.createCard}
                    />
                </Modal>
            </>
        );
    }
}

export default App;
