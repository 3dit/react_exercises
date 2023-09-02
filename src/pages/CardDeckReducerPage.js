import Card from "../components/CardDeck/Card";
import { useReducer } from 'react';
import Button from "../components/Button";
import { produce } from "immer";

const RESET_DECK = 'reset-deck';
const ADD_CARD = 'add-card';

const suits = ['diamond', 'club', 'heart', 'spade'];
const reducer = (state, action) => {
    switch(action.type)
    {
        case RESET_DECK:
            state.cardDeck = generateDeck();
            state.dealtCards = [];
            return;
        case ADD_CARD:
            const updatedDeck = [...state.cardDeck];
            let card = updatedDeck.splice(0,1)[0];
            //let card = state.cardDeck.splice(0,1)[0];
            //state.dealtCards = [...dealtCards, card];
            state.dealtCards = [...state.dealtCards, card];
            state.cardDeck = updatedDeck;
            //setFullDeck(updatedDeck);
            return
        default:
            return state;
    }
}

const generateDeck = () => {
    let sortedCardDeck = [];
    for (let i = 0; i < 4; i++) {
        let suit = suits[i];
        for (let i = 1; i < 14; i++) {
            let rank = i + 1;
            sortedCardDeck.push({ suit, rank });
        }
    }
    let randomDeck = [];
    for(let i=0;i<52;i++) {
        let randomIndex = parseInt(sortedCardDeck.length * Math.random());
        //console.log(`selecting index ${randomIndex} for deck with ${sortedCardDeck.length} left.`);
        let card = sortedCardDeck.splice(randomIndex,1)[0];
        randomDeck.push(card); 
        //console.log('added ', card.suit, card.rank);
    }

    console.log('Deck Length', randomDeck.length);
    return randomDeck;
    console.log('RANDOM', randomDeck);
}



function CardDeckReducerPage() {
    
    const [state, dispatch] = useReducer(produce(reducer), {
        dealtCards: [],
        cardDeck: generateDeck()
    });
    
    const handleClick = () => {
        // const rank = 2 + parseInt(Math.random() * 12);
        // const suitIndex = parseInt(Math.random() * 4);
        // const suit = suits[suitIndex];
        if(state.cardDeck.length===0) return;
        dispatch({type: ADD_CARD});
    }

    const handleReset = () => {
        dispatch({ type: RESET_DECK });
    }

    const renderDeck = () => {
        let index = 0;
        //console.log(state);
        //console.log('RENDER DECK', state.dealtCards);
        return state.dealtCards.map((card) => {
            //console.log('Card Render', card);
            return (<Card key={index++} suit={card.suit} rank={card.rank} />);
        })
    }
    return (
        <div>
            <h1>Card Deck</h1>
            <div>
                <Button onClick={handleClick}>Add Card</Button>
                <Button onClick={handleReset}>Handle Reset</Button>
            </div>
            <div className="flex flex-wrap">
                {renderDeck()}
            </div>
        </div>
    )
}

export default CardDeckReducerPage;