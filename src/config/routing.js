import AccordionPage from "../pages/AccordionPage";
import ButtonPage from "../pages/ButtonPage";
import CardDeckPage from "../pages/CardDeckPage";
import CardDeckReducerPage from "../pages/CardDeckReducerPage";
import DropdownPage from "../pages/DropdownPage";
import ExamplePage from "../pages/ExamplePage";
import HookExamplePage from "../pages/HookExamplePage";
import ModalPage from "../pages/ModalPage";
import TablePage from "../pages/TablePage";

const coreRoutes = [
    { label:'Buttons', path: '/buttons', page: (<ButtonPage/>) },
    { label:'Dropdown', path: '/dropdown', page: (<DropdownPage/>) },
    { label:'Accordion', path: '/accordion', page: (<AccordionPage/>) },
    { label:'Modal', path: '/modal', page: (<ModalPage/>) },
    { label:'Table', path: '/table', page: (<TablePage/>) },
    { label:'Example', path: '/example', page: (<ExamplePage/>) },
    { label:'Hook Example', path: '/hookExample', page: (<HookExamplePage initialCount={5}/>) },
    { label:'Card Deck', path: '/cardDeck', page: (<CardDeckPage/>) },
    { label:'Card Deck (Reducer)', path: '/cardDeckReducer', page: (<CardDeckReducerPage/>) },
]

export default coreRoutes;