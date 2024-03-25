import React from "react";

import Card from "./components/card";
import Modal from "./components/modal";
import CreateCard from "./components/createCard";

import './all.css'

const data = [
        {id: 1, title: '1', description: '111'},
        {id: 2, title: '2', description: '222'},
        {id: 3, title: '3', description: '333'},
        {id: 4, title: '4', description: '444'},
        {id: 5, title: '5', description: '555'},
    ];

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal: false,
            lastID: data.length,
            editedCard: null,
            cardsLists: data
        }
    }

    switchModal = (showModal) => {
        this.setState({showModal})
    }

    changeLastID = (id) => {
        this.setState(() => ({
            lastID: id ? this.state.lastID + 1 : null
        }))
    }

    createCard = (obj, save) => {
        this.setState(() => {
            const addToCardsLists = [...this.state.cardsLists, obj]
            const replaceInCardsLists = this.state.cardsLists.map(item => item.id === obj.id ? obj : item)

            return {
                cardsLists: save ?  replaceInCardsLists : addToCardsLists,
                editedCard: null
            }
        })
    }

    editCard = (obj) => {
        this.setState(() => ({
            editedCard: obj
        }))
    }

    deleteCard = (index) => {
        console.log('Remove card', index)
        this.setState(() => ({cardsLists: this.state.cardsLists.filter(elem => (elem.id !== index))}))

    }

    render() {
        return (
            <>
                <main className="main">
                    <button className="create" onClick={() => this.switchModal(true)}>+</button>

                    <div className="card-holder">
                        {this.state.cardsLists.map((card) => (
                            <Card
                                key={card.id}
                                id={card.id}
                                title={card.title}
                                description={card.description}
                                switchModal={this.switchModal}
                                editCard={this.editCard}
                                deleteCard={() => this.deleteCard(card.id)}
                            />
                        ))}
                    </div>
                </main>

                <Modal
                    switchModal={this.switchModal}
                    showModal={this.state.showModal}
                    editCard={this.editCard}
                >
                    <CreateCard
                        lastID={this.state.lastID}
                        changeLastID={this.changeLastID}
                        switchModal={this.switchModal}
                        createCard={this.createCard}
                        editedCard={this.state.editedCard}
                    />
                </Modal>
            </>
        );
    }
}

export default App;
