import { FiFolderPlus } from 'react-icons/fi';
import Section from './Section';

const handleClick = (event) => {
    console.log('SECTION CLICK', event);
    event.preventDefault();
}
function Accordion({ items }) {
    let q = 0;
    console.log('ACCORDION FIRED');
    const renderedItems = items.map((item) => {
        return (
            <Section item={item} key={item.id} />
        );
    })

    return (
        <div>{renderedItems}</div>
    );
}

export default Accordion;