
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
    for (let i = 0; i < 52; i++) {
        let randomIndex = parseInt(sortedCardDeck.length * Math.random());
        console.log(`selecting index ${randomIndex} for deck with ${sortedCardDeck.length} left.`);
        let card = sortedCardDeck.splice(randomIndex, 1)[0];
        randomDeck.push(card); console.log('added ', card.suit, card.rank);
    }
    return randomDeck;
}

const initializeCore = () => {
    console.log('################################################');
    
    const core = { generateDeck, suits };

    return core;
}

export default initializeCore;