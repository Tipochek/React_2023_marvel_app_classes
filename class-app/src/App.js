import React from "react";

import Card from "./components/card";
import Modal from "./components/modal";
import CreateCard from "./components/createCard";
import FindCard from "./components/findCard";

import './all.css'

const data = [
    {id: 1, title: '1', description: '111'},
    {id: 2, title: '2', description: '222'},
    {id: 3, title: '3', description: '333'},
    {id: 4, title: '4', description: '444'},
    {id: 5, title: '5', description: '555'},
];

// const apiKey = '24b497fd0cbed1ff9ffecb92469e2cec';
// const url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${apiKey}`;

// function getData(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data.data.results))
// }

// async function getData(url) {
//     const response = await fetch(url);
//     let json;

//     response.ok
//     ? json = await response.json()
//     : console.log(`Can't reach ${url}, status: ${response.status}`)

//     console.log(json.data.results);
//     return json.data.results;
// }
// getData(url);

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal: false,
            lastID: data?.length || 0,
            editedCard: null,
            cardsLists: data || []
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
        console.log('Delete card', index)

        this.setState(() => ({
            cardsLists: this.state.cardsLists.filter(elem => (elem.id !== index))
        }))
    }

    findCard = (title) => {
        const titleStr = title.toString();
        console.log('Find card', titleStr)

        this.setState(() => ({
            cardsLists: this.state.cardsLists.filter(elem => (elem.title === titleStr))
        }))
    }

    render() {
        return (
            <>
                <main className="main">
                    <div className="holder">
                        <button className="create" onClick={() => this.switchModal(true)}>+</button>
                        <FindCard findCard={this.findCard}/>
                    </div>

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
