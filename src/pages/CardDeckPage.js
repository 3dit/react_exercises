import Card from "../components/CardDeck/Card";
import { useState, useEffect } from 'react';
import Button from "../components/Button";


function CardDeckPage() {
    const suits = ['diamond', 'club', 'heart', 'spade'];

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
            console.log(`selecting index ${randomIndex} for deck with ${sortedCardDeck.length} left.`);
            let card = sortedCardDeck.splice(randomIndex,1)[0];
            randomDeck.push(card); console.log('added ', card.suit, card.rank);
        }

        console.log('Deck Lenght ', randomDeck.length);
        return randomDeck;
        console.log('RANDOM', randomDeck);
    }

    const [dealtCards, setDealtCards] = useState([]);
    const [fullDeck, setFullDeck] = useState([]);

    useEffect(() => {
        const newDeck = generateDeck();
        setFullDeck(newDeck);
        //setCardDeck(newDeck);
        console.log(dealtCards);
    }, []);

    
    const handleClick = () => {
        // const rank = 2 + parseInt(Math.random() * 12);
        // const suitIndex = parseInt(Math.random() * 4);
        // const suit = suits[suitIndex];
        if(fullDeck.langth==0) return;

        const updatedDeck = [...fullDeck];
        let card = updatedDeck.splice(0,1)[0];
        setDealtCards([...dealtCards, card]);
        setFullDeck(updatedDeck);
    }

    const handleReset = () => {
        let newCards = generateDeck();
        setDealtCards([]);
        setFullDeck(newCards);
    }

    const renderDeck = () => {
        let index = 0;
        console.log('RENDER DECK', dealtCards);
        return dealtCards.map((card) => {
            console.log('Card Render', card);
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

export default CardDeckPage;