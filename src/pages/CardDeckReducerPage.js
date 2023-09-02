import Card from "../components/CardDeck/Card";
import { useReducer, useEffect } from 'react';
import Button from "../components/Button";
import { produce } from "immer";

const RESET_DECK = 'reset-deck';
const ADD_CARD = 'add-card';
const SET_DECK = 'set-deck';

const suits = ['diamond', 'club', 'heart', 'spade'];

const shouldUseImmerProducer = false;

function findDuplicates(cards, source) {
    for(let i=0;i<cards.length;i++) {
        let filteredDeck = cards.filter((card, index) => {
            return index !== i;
        });
        let anyDuplicates = filteredDeck.filter((card, index) => {
            return cards[i].suit === card.suit && cards[i].rank === card.rank;
        });
        if(anyDuplicates.length) {
            console.log(`${source}: DUPLICATE!`, cards[i], anyDuplicates);
            alert(`duplicate for ${source}`)
        }
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case RESET_DECK:
            state.cardDeck = generateDeck();
            state.dealtCards = [];
            return;
        case ADD_CARD:
            const updatedDeck = [...state.cardDeck];
            let card = updatedDeck.splice(0, 1)[0];
            //let card = state.cardDeck.splice(0,1)[0];
            //state.dealtCards = [...dealtCards, card];
            state.dealtCards = [...state.dealtCards, card];
            state.cardDeck = updatedDeck;
            //setFullDeck(updatedDeck);
            findDuplicates(state.dealtCards, 'reducer ADD_CARD');
            return
        default:
            return state;
    }
}

const reducer_no_immer = (state, action) => {
    switch (action.type) {
        case RESET_DECK:
            return { ...state, cardDeck:generateDeck(), dealtCards: [] };
        case ADD_CARD:
            const updatedDeck = [...state.cardDeck];
            let card = updatedDeck.splice(0, 1)[0];
            console.log('DECK COUNT NOW ', updatedDeck.length);
            const newDealtCards = [...state.dealtCards, card];
            findDuplicates(newDealtCards, 'reducer(no immer)');
            return { ...state, dealtCards: newDealtCards, cardDeck: updatedDeck };
        case SET_DECK:
            let newState = { ...state, cardDeck: action.payload.newDeck };
            console.log('CARDS REMAINING', newState.cardDeck.length);
            return newState;

        default:
            return state;
    }
}

const generateDeck = () => {
    console.log('GENERATING NEW DECK');

    let sortedCardDeck = [];
    for (let i = 0; i < 4; i++) {
        let suit = suits[i];
        for (let i = 1; i < 14; i++) {
            let rank = i + 1;
            sortedCardDeck.push({ suit, rank });
        }
    }
    let randomDeck = [];
    for (let i = 0; i < 52; i++) {
        let nextCardIndex = parseInt(sortedCardDeck.length * Math.random());
        
        let card = sortedCardDeck.splice(nextCardIndex, 1)[0];

        //let card = sortedCardDeck[nextCardIndex];
        //sortedCardDeck = sortedCardDeck.filter((object, index) => index != 0);

        randomDeck.push(card);
    }

    console.log('Deck Length', randomDeck.length);
    console.log('RANDOM DECK', randomDeck);
    // for(let i=0;i<randomDeck.length;i++) {
    //     let filteredDeck = randomDeck.filter((card, index) => {
    //         return index !== i;
    //     });
    //     let anyDuplicates = filteredDeck.filter((card, index) => {
    //         return randomDeck[i].suit === card.suit && randomDeck[i].rank === card.rank;
    //     });
    //     if(anyDuplicates.length) console.log('DUPLICATE!', randomDeck[i], anyDuplicates);
    // }
    findDuplicates(randomDeck, 'generateDeck');
    return randomDeck;
}

const initialCardDeck = generateDeck();

function CardDeckReducerPage() {

    let reducerParam;
    if(shouldUseImmerProducer === true) {
        //producer from immer uses simpler reducer function
        reducerParam = produce(reducer);
    } else {
        //standard approach w/o using immer shortcut
        reducerParam = reducer_no_immer;
    }


    //NOTE: for below, when using "cardDeck: generateDeck()", the generateDeck() function is called for
    //every component render/update, but it appears only the initial call is used for default data. In anycase,
    //this is not efficient so use external function called once to avoid recomputing deck constantly
    const [state, dispatch] = useReducer(reducerParam, {
        dealtCards: [],
        //cardDeck: generateDeck()
        cardDeck: initialCardDeck
    });

    const handleClick = () => {
        // const rank = 2 + parseInt(Math.random() * 12);
        // const suitIndex = parseInt(Math.random() * 4);
        // const suit = suits[suitIndex];
        if (state.cardDeck.length === 0) return;
        dispatch({ type: ADD_CARD });
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