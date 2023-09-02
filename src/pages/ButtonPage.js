
import { GoBell, GoBroadcast, GoClock } from 'react-icons/go';
import { HiArrowRight } from 'react-icons/hi';
import { CiBadgeDollar } from 'react-icons/ci';
import Button from '../components/Button';

function ButtonPage() {
    const handleClick = (event) => {
        console.log('CLICK ', event);
    }
    return (
        <div>
            <Button primary onClick={handleClick}><GoBell />Go</Button>
            <Button secondary outline><GoBroadcast />Wait</Button>
            <Button warning rounded><GoClock />You sure?</Button>
            <Button danger><HiArrowRight />RUN!</Button>

        </div>
    );
}

export default ButtonPage;
