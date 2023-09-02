
import { GoBell, GoBroadcast, GoClock } from 'react-icons/go';
import { HiArrowRight } from 'react-icons/hi';
import { CiBadgeDollar } from 'react-icons/ci';
import { Button } from '../components/Button';

//import ButtonPage from './pages/ButtonPage';
import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 1,
            label:'ONE',
            content: 'One is 1.'
        },
        {
            id: 2,
            label:'TWO',
            content: 'Two is 2.'
        }
    ];

    return (
        <div>
            <div className="flex item-center text-3xl font-bold px-3 py-1.5 border mx-2 my-1.5">
                    App<CiBadgeDollar className="ml-1 mt-auto"/>
            </div>
            <Accordion items={items} />
        </div>
    );
}

export default AccordionPage;
