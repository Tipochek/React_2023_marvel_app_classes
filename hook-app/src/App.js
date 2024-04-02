import React, { useState } from "react";

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

const App = () => {
    const [showModal, setShowModal] = useState(false)
    const [lastID, setLastID] = useState(data?.length || 0)
    const [editedCard, setEditedCard] = useState(null)
    const [cardsLists, setCardsLists] = useState(data || [])

    const switchModal = (showModal) => {
        setShowModal(showModal)
    }

    const changeLastID = (id) => {
        setLastID(() => id ? lastID + 1 : null)
    }

    const createCard = (obj, save) => {
        const addToCardsLists = [...cardsLists, obj]
        const replaceInCardsLists = cardsLists.map(item => item.id === obj.id ? obj : item)

        setCardsLists(save ?  replaceInCardsLists : addToCardsLists)
        setEditedCard(null)
    }

    const editCard = (obj) => {
        setEditedCard(() => obj)
    }

    const deleteCard = (index) => {
        console.log('Delete card', index)

        setCardsLists(() => cardsLists.filter(elem => (elem.id !== index)))
    }

    const findCard = (title) => {
        const titleStr = title.toString();
        console.log('Find card', titleStr)

        setCardsLists(() => cardsLists.filter(elem => (elem.title === titleStr)))
    }

    return (
        <>
            <main className="main">
                <div className="holder">
                    <button className="create" onClick={() => switchModal(true)}>+</button>
                    <FindCard findCard={findCard}/>
                </div>

                <div className="card-holder">
                    {cardsLists.map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            switchModal={switchModal}
                            editCard={editCard}
                            deleteCard={() => deleteCard(card.id)}
                        />
                    ))}
                </div>
            </main>

            <Modal
                switchModal={switchModal}
                showModal={showModal}
                editCard={editCard}
            >
                <CreateCard
                    lastID={lastID}
                    changeLastID={changeLastID}
                    switchModal={switchModal}
                    createCard={createCard}
                    editedCard={editedCard}
                />
            </Modal>
        </>
    );
}

export default App;
