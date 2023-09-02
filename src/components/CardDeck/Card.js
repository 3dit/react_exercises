import { BsFillSuitClubFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsFillSuitSpadeFill } from "react-icons/bs";
import { BsFillSuitDiamondFill } from "react-icons/bs";

function Card({ suit, rank }) {
    //console.log('CARD#####', suit, rank)
    const suitsIcons = {
        'club': (<BsFillSuitClubFill className="ml-1" />),
        'heart': (<BsFillSuitHeartFill className="ml-1" />),
        'spade': (<BsFillSuitSpadeFill className="ml-1" />),
        'diamond': (<BsFillSuitDiamondFill className="ml-1" />),
    }

    const getRankExpression = (rank) => {
        if (rank <= 10) return `${rank}`;
        const rankMap = { '11': 'J', '12': 'Q', '13': 'K', '14': 'A' };
        return rankMap[`${rank}`];
    }

    const getCardColor = (suit) => {
        return (suit === 'heart' || suit === 'diamond') ? 'red' : 'black'
    }

    const rankAndSuit = {
        'club': (<div className="cardsuit">{suitsIcons[suit]}</div>),
        'heart': (<div className="cardsuit">{suitsIcons[suit]}</div>),
        'spade': (<div className="cardsuit">{suitsIcons[suit]}</div>),
        'diamond': (<div className="cardsuit">{suitsIcons[suit]}</div>),
    }


    return (
        <div className="border-[.2rem] border-gray-400 rounded m-2 p-[.5rem] w-[6.5rem] h-[9rem] rounded-b-large drop-shadow-lg" style={{ 'color': getCardColor(suit) }}>

            <div className="flex flex-col h-[8rem] justify-between">
                <div className="flex flex-row justify-end scale scale-[1.5] mr-[.8rem]">
                    {rankAndSuit[suit]}
                </div>
                <div className="flex flex-row justify-center scale-4">
                    <h1 className="scale-[3] font-bold drop-shadow-md">{getRankExpression(rank)}</h1>
                </div>
                <div className="flex flex-row justify-star scale-[1.5] mr-[2.5rem] mb-[.5rem]">
                    {rankAndSuit[suit]}
                </div>
            </div>
        </div>
    )
}

export default Card;